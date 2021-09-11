import fs from "node:fs/promises";
import path from "node:path";

import { svgo } from "./optimize-svg.mjs";

import { ImagePool } from "@squoosh/lib";

import { INPUT_DIR, OUTPUT_DIR } from "./prod-config.mjs";
import createHash from "./prod-hash.mjs";

export async function optimizeVector(url) {
  console.log("vector", url);
  url = new URL(url, INPUT_DIR);
  const ext = path.extname(url.pathname);

  switch (ext) {
    case ".svg":
      const fileContent = await svgo(await fs.readFile(url, "utf8"));
      const hash = createHash(fileContent);
      const fileName = `${hash}.svg`;
      await fs.writeFile(new URL(fileName, OUTPUT_DIR), fileContent);
      return fileName;

    default:
      throw new Error("unsupported vector extension: " + JSON.stringify(ext));
  }
}

const encodeOptions = {
  webp: {},
  avif: {},
};

const getImagePool = (async function* generateImagePool() {
  let imagePool, closeImagePool;
  do {
    const imagePoolClosing = new Promise((resolve) => {
      closeImagePool = resolve;
    }).then(() => imagePool?.close());
    yield {
      get imagePool() {
        return (imagePool = new ImagePool());
      },
      closeImagePool,
    };
    await imagePoolClosing;
  } while (1);
})();

export async function optimizeMatrix(src, sizes) {
  console.log("matrix", src, sizes);
  const {
    value: { imagePool, closeImagePool },
  } = await getImagePool.next();
  const url = new URL(src, INPUT_DIR);
  const ext = path.extname(url.pathname).toLowerCase();
  let encodeOpts, originalExt;
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      encodeOpts = { ...encodeOptions, mozjpeg: {} };
      originalExt = "jpg";
      break;
    case ".png":
      encodeOpts = { ...encodeOptions, oxipng: { level: 3 } };
      originalExt = "png";
      break;
    default:
      throw new Error(
        "unsupported matrix image extension: " + JSON.stringify(ext)
      );
  }

  const fileContent = await fs.readFile(url);
  const image = imagePool.ingestImage(fileContent);

  const {
    bitmap: { width, height },
  } = await image.decoded;

  const sources = [];
  for (const width of sizes) {
    await image.preprocess({
      resize: {
        enabled: true,
        width,
      },
    });

    await image.encode(encodeOpts);

    for (const encodedImage of Object.values(image.encodedWith)) {
      const { binary, extension } = await encodedImage;
      const hash = createHash(binary);
      const fileName = `${hash}.${extension}`;
      await fs.writeFile(new URL(fileName, OUTPUT_DIR), binary);

      console.log("converted", src, extension, width);

      sources.push({ src, extension, fileName, width });
    }
  }

  closeImagePool();

  return { sources, originalExt, width, height };
}

const toSrcset = (data, extension) =>
  data
    .filter((job) => job.extension === extension)
    .map((job) => `${job.fileName} ${job.width}w`)
    .join(",");

const toSrc = (data, extension) => {
  const extData = data.filter((job) => job.extension === extension);
  return extData.find(
    (job) => job.width === Math.max(...extData.map((job) => job.width))
  ).fileName;
};

export async function generatePictureInnerHTML(src, alt, aboveTheFold, jobs) {
  const { sources, originalExt, width, height } = await jobs[src];

  return (
    `<source type="image/avif" srcset="${toSrcset(sources, "avif")}"/>` +
    `<source type="image/webp" srcset="${toSrcset(sources, "webp")}"/>` +
    `<img alt=${JSON.stringify(alt)} srcset="${toSrcset(
      sources,
      originalExt
    )}" src="${toSrc(sources, originalExt)}" loading="${
      aboveTheFold ? "eager" : "lazy"
    }" width="${width}" height="${height}"/>`
  );
}
