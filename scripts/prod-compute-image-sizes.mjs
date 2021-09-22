const viewportToTest = {
  // Full HD
  width: 1920,
  height: 1080,
  deviceScaleFactor: 1,
};

async function crawlPage(page) {
  const matrixImages = await page.$$("picture");
  await page.setViewport(viewportToTest);
  for (const elem of matrixImages) {
    const src = await elem.evaluate((picture) =>
      picture.lastElementChild.src.replace(location.origin, ".")
    );
    if (src) {
      const { width, height } = await elem.boundingBox();
      console.log(
        `actual size (on Full HD screen): ${width}x${height} => scale up size (x3): ${Math.ceil(
          width * 3
        )}x${Math.ceil(height * 3)}`
      );
      await elem.dispose();
    } else {
      console.warn(new Error("Picture without src attribute"));
    }
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
}
