import { readFile, writeFile } from "node:fs/promises";

import { spawnFfmpegProcess as spawn } from "./dev-build-animated-images.mjs";
import createHash from "./prod-hash.mjs";
import { OUTPUT_DIR } from "./dev-config.mjs";

function spawnFfmpegProcess(i, size, options) {
  return spawn({ i, ...options, vf: `scale=${size}:-1` });
}

export default async function buildAnimatedImage(
  input,
  extension,
  size,
  options
) {
  const outputFile = await spawnFfmpegProcess(input, size, options);
  const fileContent = await readFile(outputFile);
  const hash = createHash(fileContent);
  const fileName = `${hash}.${extension}`;
  await writeFile(new URL(fileName, OUTPUT_DIR), fileContent);
  return fileName;
}
