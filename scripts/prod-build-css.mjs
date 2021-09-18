import { writeFile } from "node:fs/promises";
import sass from "sass";
import { OUTPUT_DIR } from "./prod-config.mjs";
import createHash from "./prod-hash.mjs";

export default async function sass2css(sassFiles) {
  const { css } = sass.renderSync({
    data: sassFiles.map((path) => `@use ${JSON.stringify(path)}`).join(";"),
  });

  const hash = createHash(css);
  const fileName = `${hash}.css`;
  await writeFile(new URL(fileName, OUTPUT_DIR), css);
  return fileName;
}
