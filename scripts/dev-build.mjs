import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import Eleventy from "@11ty/eleventy";
import { INPUT_DIR, OUTPUT_DIR } from "./dev-config.mjs";

// Eleventy doesn't deal with file URLs nor absolute paths
const inputDirRelativePath = path.relative(
  process.cwd(),
  fileURLToPath(INPUT_DIR)
);

const e11y = new Eleventy(inputDirRelativePath, fileURLToPath(OUTPUT_DIR));
e11y.setConfigPathOverride(path.join(inputDirRelativePath, ".eleventy.dev.js"));
await e11y.init();
e11y.write();

export async function sendRebuildSignal(filename) {
  if (e11y.config.templateFormats.includes(path.extname(filename).slice(1))) {
    await e11y.restart();
    await e11y.write();
  }
}
