import {
  generatePictureInnerHTML,
  optimizeMatrix,
  optimizeVector,
} from "./prod-build-images.mjs";
import sass2css from "./prod-build-css.mjs";
import buildRuntimeJS from "./prod-build-js.mjs";
import copyRSSFeed from "./prod-build-rss-feed.mjs";
import {
  ANALYTICS_ID,
  CANONICAL_ORIGIN,
  DEALFRONT_ID,
  GTAG_ID,
} from "./prod-config.mjs";
import viewportsToTest from "./prod-viewports-to-test.mjs";

const imgData = new Map();
const sassMappings = new Map();

function addAnalyticsSnippet(DEALFRONT_ID, ANALYTICS_ID, GTAG_ID) {
  const scriptPlausible = document.createElement("script");
  scriptPlausible.defer = true;
  scriptPlausible.dataset.domain = ANALYTICS_ID;
  scriptPlausible.src = "https://plausible.io/js/script.js";
  document.head.append(scriptPlausible);

  const scriptDealFront = document.createElement("script");
  scriptDealFront.async = true;
  scriptDealFront.defer = true;
  scriptDealFront.src = `https://sc.lfeeder.com/lftracker_v1_${DEALFRONT_ID}.js`;

  const scriptGTM = document.createElement("script");
  scriptGTM.async = true;
  scriptGTM.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
  const scriptGTag = document.createElement("script");
  scriptGTag.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GTAG_ID}');`;

  const script0 = document.createElement("script");
  script0.textContent =
    "window.ldfdr||=()=>{(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}";
  document.head.append(
    script0,
    scriptPlausible,
    scriptDealFront,
    scriptGTM,
    scriptGTag
  );
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
    const js = await elem.evaluate((elem) => elem.dataset.file);
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

  const rssFeed = await page.$(
    "link[rel='alternate'][type='application/atom+xml']"
  );
  if (rssFeed) {
    const href = await rssFeed.evaluate((link) =>
      link.getAttribute("href").replace("{ origin }", ".")
    );
    await rssFeed.evaluate(
      (link, href) => link.setAttribute("href", href),
      await copyRSSFeed(href)
    );
  }

  const vectorFavicon = await page.$("link[rel='icon'][type='image/svg+xml']");
  if (vectorFavicon) {
    const src = await vectorFavicon.evaluate((image) =>
      image.href.replace(location.origin, ".")
    );
    if (src) {
      await vectorFavicon.evaluate((node, src) => {
        globalThis.leadingSlash = node.getAttribute("href").startsWith("/")
          ? "/"
          : "";
        node.href = leadingSlash + src;
      }, await optimizeVector(src));
    } else {
      console.warn(new Error("Favicon without href attribute"));
    }
    await vectorFavicon.dispose();
  }

  const leadingSlash = await page.evaluate(() => leadingSlash);

  const vectorImages = await page.$$(
    // If `src` contains "{{ }}", it's a Liquid tag that we should leave alone for Jekyll to handle.
    "img:not(picture>img):not([src*='{{'],[src*='}}'])"
  );
  for (const elem of vectorImages) {
    const src = await elem.evaluate((image) =>
      image.src.replace(location.origin, ".")
    );
    if (src) {
      await elem.evaluate((node, src) => {
        node.src = leadingSlash + src;
        node.setAttribute("width", node.width);
        node.setAttribute("height", node.height);
      }, await optimizeVector(src));
    } else {
      console.warn(new Error("Vector image without src attribute"));
    }
    await elem.dispose();
  }

  const { sassBundling, jobs } = await signalIn;

  for (const elem of matrixImages) {
    const src = srcMap.get(elem);
    const alt = await elem.evaluate(({ lastElementChild: image }) => image.alt);
    await elem.evaluate((node, src) => {
      node.innerHTML = src;
    }, await generatePictureInnerHTML(src, alt, aboveTheFold.has(elem), jobs, leadingSlash));
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
          link.href = leadingSlash + url;
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
      const href = elem.getAttribute("href");
      if (href === "{ origin }{ pathname }") {
        elem.href = new URL(
          location.pathname + location.search + location.hash,
          origin
        );
      } else {
        elem.setAttribute("href", href.replace("{ origin }", origin));
      }
    },
    CANONICAL_ORIGIN
  );
  await page.$eval(
    'meta[property="og:url"]',
    (elem, origin) => {
      const href = elem.getAttribute("content");
      elem.setAttribute(
        "content",
        href === "{ origin }{ pathname }"
          ? new URL(location.pathname + location.search + location.hash, origin)
          : href.replace("{ origin }", origin)
      );
    },
    CANONICAL_ORIGIN
  );

  await page.evaluate((js) => {
    if (!js) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = leadingSlash + js;
    document.body.append(script);
  }, await buildRuntimeJS(jsRuntimeModules));

  await page.evaluate(() =>
    Array.from(document.querySelectorAll("a.cta[href='#']"), (e) => e.remove())
  );

  if (DEALFRONT_ID) {
    await page.setOfflineMode(true);
    await page.evaluate(
      addAnalyticsSnippet,
      DEALFRONT_ID,
      ANALYTICS_ID,
      GTAG_ID
    );
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
