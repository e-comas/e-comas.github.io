import fs from "node:fs/promises";
import path from "node:path";

import { svgo } from "./optimize-svg.mjs";

import { INPUT_DIR, OUTPUT_DIR } from "./prod-config.mjs";
import createHash from "./prod-hash.mjs";
import CacheMap from "./prod-image-cache.mjs";

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

const encodeOptionsJPEG = {
  avif: {},
  mozjpeg: {
    quality: 95,
  },
  webp: {},
};
const encodeOptionsPNG = {
  avif: { quality: 50 },
  oxipng: { level: 3 },
  webp: { lossless: 1, nearLossless: 75 },
};

const codecOptionsHashesCache = new WeakMap();
const getCodecOptionHash = (codec, options) => {
  const cachedValue = codecOptionsHashesCache.get(options);
  if (cachedValue != null) return cachedValue;

  const valueToCache = createHash(JSON.stringify({ [codec]: options }));
  codecOptionsHashesCache.set(options, valueToCache);
  return valueToCache;
};

const getImagePool = (async function* generateImagePool() {
  let imagePool, closeImagePool;
  // Lazy-load libSquoosh as it registers globals clashing with other packages.
  // @see https://github.com/GoogleChromeLabs/squoosh/issues/1152
  const squoosh = await import("@squoosh/lib");
  do {
    const imagePoolClosing = new Promise((resolve) => {
      closeImagePool = resolve;
    }).then(() => imagePool?.close());
    yield {
      get imagePool() {
        return (imagePool = new squoosh.ImagePool());
      },
      closeImagePool,
    };
    await imagePoolClosing;
  } while (1);
})();

let imageCache;
export async function optimizeMatrix(src, sizes) {
  console.log("matrix", src, sizes);
  const {
    value: { imagePool, closeImagePool },
  } = await getImagePool.next();
  const url = new URL(src, INPUT_DIR);
  const ext = path.extname(url.pathname).toLowerCase();
  let encodeOpts, originalCodec;
  switch (ext) {
    case ".jpg":
    case ".jpeg":
      encodeOpts = encodeOptionsJPEG;
      originalCodec = "mozjpeg";
      break;
    case ".png":
      encodeOpts = encodeOptionsPNG;
      originalCodec = "oxipng";
      break;
    default:
      throw new Error(
        "unsupported matrix image extension: " + JSON.stringify(ext)
      );
  }

  const fileContent = await fs.readFile(url);
  const fileHash = createHash(fileContent);
  const image = imagePool.ingestImage(fileContent);

  const {
    bitmap: { width, height },
  } = await image.decoded;

  imageCache ??= new CacheMap(new URL("./cache.csv", OUTPUT_DIR));
  const sources = [];
  for (const width of sizes) {
    const cacheEntries = await imageCache.get(fileHash, width);
    if (cacheEntries != null) {
      try {
        await Promise.all(
          Object.entries(encodeOpts).map(([codec, options]) =>
            fs
              .access(
                new URL(
                  cacheEntries[getCodecOptionHash(codec, options)],
                  OUTPUT_DIR
                )
              )
              .then(() => {
                delete encodeOpts[codec];
                sources.push({
                  src,
                  codec,
                  fileName: cacheEntries[getCodecOptionHash(codec, options)],
                  width,
                });
              })
          )
        );
        console.log("using cache", src, width);
        continue;
      } catch (err) {
        console.log(err);
      }
    }

    await image.preprocess({
      resize: {
        enabled: true,
        width,
      },
    });

    await image.encode(encodeOpts);

    for (const [codec, encodedImage] of Object.entries(image.encodedWith)) {
      const { binary, extension } = await encodedImage;
      const hash = createHash(binary);
      const fileName = `${hash}.${extension}`;
      await fs.writeFile(new URL(fileName, OUTPUT_DIR), binary);

      console.log("converted", src, codec, width);

      sources.push({ src, codec, fileName, width });
      imageCache
        .set(
          fileHash,
          width,
          getCodecOptionHash(codec, encodeOpts[codec]),
          fileName
        )
        .catch(console.error);
    }
  }

  closeImagePool();

  return { sources, originalCodec, width, height };
}

const toSrcset = (data, codec) =>
  data
    .filter((job) => job.codec === codec)
    .map((job) => `${job.fileName} ${job.width}w`)
    .join(",");

const toSrc = (data, codec) => {
  const extData = data.filter((job) => job.codec === codec);
  return extData.find(
    (job) => job.width === Math.max(...extData.map((job) => job.width))
  ).fileName;
};

export async function generatePictureInnerHTML(src, alt, aboveTheFold, jobs) {
  const { sources, originalCodec, width, height } = await jobs[src];

  return (
    `<source type="image/avif" srcset="${toSrcset(sources, "avif")}"/>` +
    `<source type="image/webp" srcset="${toSrcset(sources, "webp")}"/>` +
    `<img alt=${JSON.stringify(alt)} srcset="${toSrcset(
      sources,
      originalCodec
    )}" src="${toSrc(sources, originalCodec)}" loading="${
      aboveTheFold ? "eager" : "lazy"
    }" width="${width}" height="${height}"/>`
  );
}
