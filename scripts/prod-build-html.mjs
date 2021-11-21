import {
  generatePictureInnerHTML,
  optimizeMatrix,
  optimizeVector,
} from "./prod-build-images.mjs";
import sass2css from "./prod-build-css.mjs";
import buildRuntimeJS from "./prod-build-js.mjs";
import { CANONICAL_ORIGIN, GA_ID } from "./prod-config.mjs";
import viewportsToTest from "./prod-viewports-to-test.mjs";

const imgData = new Map();
const sassMappings = new Map();

function addGoogleAnalyticsSnippet(id) {
  const gtm = document.createElement("script");
  gtm.async = true;
  gtm.src =
    "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  const inline = document.createElement("script");
  inline.textContent =
    "window.dataLayer=window.dataLayer||[];" +
    `if(!localStorage.getItem("cookie-consent"))window["ga-disable-"+${JSON.stringify(
      id
    )}]=true;` +
    "function gtag(){dataLayer.push(arguments)}" +
    'gtag("js",new Date);' +
    `gtag("config",${JSON.stringify(id)});`;
  document.head.append(gtm, inline);
}

async function editPage(page, signalIn, signalOut) {
  const jsRuntimeModules = [];
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
        const width =
          (await elem.evaluate(({ lastElementChild: img }) =>
            img.width === 0 || img.height === 0
              ? 0
              : Math.ceil(
                  img.naturalWidth /
                    Math.min(
                      img.naturalWidth / img.width,
                      img.naturalHeight / img.height
                    )
                )
          )) * viewport.deviceScaleFactor;
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

  const scriptNodes = await page.$$("script[data-file]");
  for (const elem of scriptNodes) {
    const js = await elem.evaluate((elem) => elem.textContent);
    jsRuntimeModules.push(js);
    await elem.evaluate((elem) => elem.remove());
    await elem.dispose();
  }

  const openGraphImages = await page.$$(
    'meta[property="og:image"],meta[property="og:image:url"],meta[property="og:image:secure_url"]'
  );
  for (const elem of openGraphImages) {
    const src = await elem.evaluate((image) => {
      const url = new URL(image.getAttribute("content"), location.origin);
      url.hash = "#opengraph";
      return url.toString().replace(location.origin, ".");
    });
    srcMap.set(elem, src);
    imgData.set(src, new Set().add(Infinity));
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
  for (const elem of openGraphImages) {
    const src = srcMap.get(elem);
    await elem.evaluate(
      (node, { sources, width, height }, origin) => {
        node.setAttribute("content", new URL(sources[0].fileName, origin));
        node.parentNode
          .querySelector('meta[property="og:image:width"]')
          .setAttribute("content", width);
        node.parentNode
          .querySelector('meta[property="og:image:height"]')
          .setAttribute("content", height);
      },
      await jobs[src],
      CANONICAL_ORIGIN
    );
    await elem.dispose();
  }

  for (const elem of styleNodes) {
    await elem.evaluate((elem) => elem.remove());
    await elem.dispose();
  }
  const inlineStyles = await page.$$eval(
    "style[data-inline-style]",
    (styles) => {
      const returnVal = {};
      for (const elem of styles) {
        returnVal[elem.dataset.inlineStyle] = elem.textContent;
        elem.remove();
      }
      return returnVal;
    }
  );
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
          return sass2css(sassFiles, inlineStyles);
        }
      }).filter(Boolean)
    )
  );

  await page.$eval(
    'link[rel="canonical"]',
    (elem, origin) => {
      elem.href = new URL(
        location.pathname + location.search + location.hash,
        origin
      );
    },
    CANONICAL_ORIGIN
  );
  await page.$eval(
    'meta[property="og:url"]',
    (elem, origin) => {
      elem.setAttribute(
        "content",
        new URL(location.pathname + location.search + location.hash, origin)
      );
    },
    CANONICAL_ORIGIN
  );

  await page.evaluate((js) => {
    if (!js) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = js;
    document.body.append(script);
  }, await buildRuntimeJS(jsRuntimeModules));

  await page.evaluate(() =>
    Array.from(document.querySelectorAll("a.cta[href='#']"), (e) => e.remove())
  );

  if (GA_ID) {
    await page.setOfflineMode(true);
    await page.evaluate(addGoogleAnalyticsSnippet, GA_ID);
  }
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
      pageTransformations.push(editPage(page, allPagesAreReady, signalOut));
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
