import { writeFile } from "node:fs/promises";
import puppeteer from "puppeteer";

import { startServer } from "./dev-server.mjs";
import { OUTPUT_DIR } from "./prod-config.mjs";

import findPages from "./generate-web-tree.mjs";
import { crawlPages } from "./prod-build-html.mjs";

process.env.NODE_ENV = "production";

const closeServer = await startServer();

let browser;
try {
  browser = await puppeteer.launch(process.env.DEBUG && { devtools: true });
  const pages = await crawlPages(findPages(browser));
  if (process.env.DEBUG) await new Promise(Function.prototype);
  for (const page of pages) {
    const url = new URL(page.url());
    await writeFile(
      new URL(
        url.pathname === "/" ? "./index.html" : "." + url.pathname,
        OUTPUT_DIR
      ),
      await page.content()
    );
    console.log("Wrote", url.pathname);
  }
} finally {
  await browser?.close();
}

console.log("Closing server");
await closeServer();
console.log("Done");
