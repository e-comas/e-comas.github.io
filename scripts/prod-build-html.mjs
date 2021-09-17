import {
  generatePictureInnerHTML,
  optimizeMatrix,
  optimizeVector,
} from "./prod-build-images.mjs";

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
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  },
  {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2,
  },
  {
    width: 3840,
    height: 2160,
    deviceScaleFactor: 1,
  },
];

const imgData = new Map();

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

  signalOut();

  const vectorImages = await page.$$("img:not(picture>img)");
  for (const elem of vectorImages) {
    const src = await elem.evaluate((image) =>
      image.src.replace(location.origin, ".")
    );
    if (src) {
      await elem.evaluate((node, src) => {
        node.src = src;
      }, await optimizeVector(src));
    } else {
      console.warn(new Error("Vector image without src attribute"));
    }
    await elem.dispose();
  }

  const jobs = await signalIn;

  for (const elem of matrixImages) {
    const src = srcMap.get(elem);
    const alt = await elem.evaluate((image) => image.alt);
    await elem.evaluate((node, src) => {
      node.innerHTML = src;
    }, await generatePictureInnerHTML(src, alt, aboveTheFold.has(elem), jobs));
    await elem.dispose();
  }
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

  const jobs = Object.create(null);
  for (const [src, widths] of imgData) {
    jobs[src] = optimizeMatrix(src, widths);
    jobs[src].catch(console.warn);
  }
  setAllPagesAsReady(jobs);

  await allTransformationsAreDone;
  console.log("All image transformations are done");

  return filteredPages;
}
