import fs from "node:fs/promises";
import { CANONICAL_ORIGIN, INPUT_DIR, OUTPUT_DIR } from "./prod-config.mjs";

const cache = new Set();
export default async function copyRSSFeed(href) {
  if (!cache.has(href)) {
    cache.add(href);
    await fs.copyFile(new URL(href, INPUT_DIR), new URL(href, OUTPUT_DIR));
  }
  return new URL(href, CANONICAL_ORIGIN).toString();
}
