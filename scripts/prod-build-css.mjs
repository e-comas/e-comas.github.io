import { writeFile } from "node:fs/promises";

import cssnano from "cssnano";
import postcss from "postcss";
import sass from "sass";

import { OUTPUT_DIR } from "./prod-config.mjs";
import createHash from "./prod-hash.mjs";

export default async function sass2css(sassFiles) {
  const sassResult = sass.renderSync({
    data: sassFiles.map((path) => `@use ${JSON.stringify(path)}`).join(";"),
  });

  const { css } = await postcss([cssnano({ preset: ["advanced"] })]).process(
    sassResult.css,
    { from: undefined, map: { annotation: false } }
  );

  const hash = createHash(css);
  const fileName = `${hash}.css`;
  await writeFile(new URL(fileName, OUTPUT_DIR), css);
  return fileName;
}
