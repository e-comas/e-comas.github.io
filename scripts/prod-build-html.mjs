import {
  generatePictureInnerHTML,
  optimizeMatrix,
  optimizeVector,
} from "./prod-build-images.mjs";
import sass2css from "./prod-build-css.mjs";

const viewportsToTest = [
  {
    width: 360,
    height: 640,
    deviceScaleFactor: 1,
  },
  {
    // iPhone 8
    width: 375,
    height: 667,
    deviceScaleFactor: 2,
  },
  {
    // iPhone 8+
    width: 414,
    height: 736,
    deviceScaleFactor: 3,
  },
  {
    // iPhone X/12
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
  },
  {
    // iPhone 11
    width: 414,
    height: 896,
    deviceScaleFactor: 2,
  },
  {
    // iPad
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
  },
  {
    // iPad
    width: 1024,
    height: 768,
    deviceScaleFactor: 2,
  },
  {
    // iPad Pro
    width: 1024,
    height: 1366,
    deviceScaleFactor: 2,
  },
  {
    // iPad Pro
    width: 1366,
    height: 1024,
    deviceScaleFactor: 2,
  },
  {
    width: 640,
    height: 480,
    deviceScaleFactor: 1,
  },
  {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
  },
  {
    width: 1366,
    height: 768,
    deviceScaleFactor: 1,
  },
  {
    // Full HD
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  },
  {
    // Retina Full HD
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2,
  },
  {
    // QHD
    width: 2880,
    height: 1440,
    deviceScaleFactor: 1,
  },
  {
    // 4K
    width: 3840,
    height: 2160,
    deviceScaleFactor: 1,
  },
];

const imgData = new Map();
const sassMappings = new Map();

async function crawlPage(page, signalIn, signalOut) {
  const srcMap = new WeakMap();
  const aboveTheFold = new WeakSet();
  const matrixImages = await page.$$("picture");
  for (const viewport of viewportsToTest) {
    await page.setViewport(viewport);
    for (const elem of matrixImages) {
      const src = await elem.evaluate((picture) =>
        picture.lastElementChild.src.replace(location.origin, ".")
      );
      if (src) {
        const width = await elem.evaluate(({ lastElementChild: img }) =>
          img.width === 0 || img.height === 0
            ? 0
            : Math.ceil(
                img.naturalWidth /
                  Math.min(
                    img.naturalWidth / img.width,
                    img.naturalHeight / img.height
                  )
              )
        );
        if (await elem.isIntersectingViewport()) aboveTheFold.add(elem);
        srcMap.set(elem, src);
        imgData.get(src)?.add(width) ?? imgData.set(src, new Set().add(width));
      } else {
        console.warn(new Error("Picture without src attribute"));
      }
    }
  }

  const styleNodes = await page.$$("style[data-file]");
  for (const elem of styleNodes) {
    const file = await elem.evaluate((elem) => elem.dataset.file);
    sassMappings.get(file)?.add(page.url()) ??
      sassMappings.set(file, new Set().add(page.url()));
  }

  signalOut();

  const vectorImages = await page.$$("img:not(picture>img)");
  for (const elem of vectorImages) {
    const src = await elem.evaluate((image) =>
      image.src.replace(location.origin, ".")
    );
    if (src) {
      await elem.evaluate((node, src) => {
        node.src = src;
        node.setAttribute("width", node.width);
        node.setAttribute("height", node.height);
      }, await optimizeVector(src));
    } else {
      console.warn(new Error("Vector image without src attribute"));
    }
    await elem.dispose();
  }

  const vectorFavicon = await page.$("link[rel='icon'][type='image/svg+xml']");
  if (vectorFavicon) {
    const src = await vectorFavicon.evaluate((image) =>
      image.href.replace(location.origin, ".")
    );
    if (src) {
      await vectorFavicon.evaluate((node, src) => {
        node.href = src;
      }, await optimizeVector(src));
    } else {
      console.warn(new Error("Favicon without href attribute"));
    }
    await vectorFavicon.dispose();
  }

  const { sassBundling, jobs } = await signalIn;

  for (const elem of matrixImages) {
    const src = srcMap.get(elem);
    const alt = await elem.evaluate(({ lastElementChild: image }) => image.alt);
    await elem.evaluate((node, src) => {
      node.innerHTML = src;
    }, await generatePictureInnerHTML(src, alt, aboveTheFold.has(elem), jobs));
    await elem.dispose();
  }

  for (const elem of styleNodes) {
    await elem.evaluate((elem) => elem.remove());
    await elem.dispose();
  }
  await page.evaluate(
    (urls) => {
      document.head.append(
        ...urls.map((url) => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = url;
          return link;
        })
      );
    },
    await Promise.all(
      Array.from(sassBundling.entries(), ([pages, sassFiles]) => {
        if (pages.has(page.url())) {
          return sass2css(sassFiles);
        }
      }).filter(Boolean)
    )
  );
}

function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

export async function crawlPages(pages) {
  let setAllPagesAsReady;
  const allPagesAreReady = new Promise((resolve) => {
    setAllPagesAsReady = resolve;
  });
  const waitForSignal = [];
  const pageTransformations = [];
  const filteredPages = [];
  for await (const page of pages) {
    if (page != null) {
      filteredPages.push(page);
      let signalOut;
      waitForSignal.push(
        new Promise((resolve) => {
          signalOut = resolve;
        })
      );
      pageTransformations.push(crawlPage(page, allPagesAreReady, signalOut));
    }
  }

  const allTransformationsAreDone = Promise.all(pageTransformations);
  allTransformationsAreDone.catch(console.warn);

  await Promise.all(waitForSignal);

  const sassBundling = new Map();
  sassMappingsLoop: for (const [sassFile, pages] of sassMappings) {
    for (const [_pages, sassBundle] of sassBundling) {
      if (isSuperset(pages, _pages) && isSuperset(_pages, pages)) {
        sassBundle.push(sassFile);
        continue sassMappingsLoop;
      }
    }
    sassBundling.set(pages, [sassFile]);
  }

  const jobs = Object.create(null);
  for (const [src, widths] of imgData) {
    jobs[src] = optimizeMatrix(src, widths);
    jobs[src].catch(console.warn);
  }
  setAllPagesAsReady({ jobs, sassBundling });

  await allTransformationsAreDone;
  console.log("All image transformations are done");

  return filteredPages;
}
