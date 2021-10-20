import { createReadStream, createWriteStream } from "node:fs";
import { rename } from "node:fs/promises";
import { spawnFfmpegProcess as spawn } from "./dev-build-animated-images.mjs";

import { streamHash } from "./prod-hash.mjs";

function spawnFfmpegProcess(i, size, options) {
  return spawn({ i, ...options, s: `${size}x-1` });
}

export default async function buildAnimatedImage(
  input,
  extension,
  size,
  options
) {
  const outputFile = spawnFfmpegProcess(input, size, options);
  const hash = await streamHash(createReadStream(outputFile));
  const fileName = `${hash}.${extension}`;
  await rename(outputFile, fileName);
  return fileName;
}
