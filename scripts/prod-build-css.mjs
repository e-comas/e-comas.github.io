import { writeFile } from "node:fs/promises";

import cssnano from "cssnano";
import postcss from "postcss";
import * as sass from "sass";

import copyAssets from "./postcss-copy-assets.mjs";

import { INPUT_DIR, OUTPUT_DIR } from "./prod-config.mjs";
import createHash from "./prod-hash.mjs";
import { pathToFileURL } from "node:url";

const cache = new WeakMap();
export default async function sass2css(sassFiles, inlineStyles) {
  const cachedValue = cache.get(sassFiles);
  if (cachedValue != null) return cachedValue;
  const sassResult = sass.compileString(
    sassFiles
      .map((path) => `@use ${JSON.stringify(pathToFileURL(path))}`)
      .concat(
        Object.entries(inlineStyles).filter(([file]) =>
          sassFiles.some((sassFile) => sassFile.endsWith(file))
        )
      )
      .join(";"),
    { url: INPUT_DIR }
  );

  const { css } = await postcss([
    cssnano({
      preset: [
        "advanced",
        {
          reduceIdents: false,
          cssDeclarationSorter: false,
        },
      ],
    }),
    copyAssets({
      base: INPUT_DIR,
      distBase: OUTPUT_DIR,
      urlTransform(url, contents) {
        const lastDotIndex = url.pathname.lastIndexOf(".");
        const ext = lastDotIndex === -1 ? "" : url.pathname.slice(lastDotIndex);
        const fileName = createHash(contents) + ext;
        console.log("writing to disk", fileName);
        return new URL(fileName, OUTPUT_DIR);
      },
    }),
  ]).process(sassResult.css, { from: undefined, map: { annotation: false } });

  const hash = createHash(css);
  const fileName = `${hash}.css`;
  await writeFile(new URL(fileName, OUTPUT_DIR), css);
  console.log("written to disk", fileName);
  cache.set(sassFiles, fileName);
  return fileName;
}
