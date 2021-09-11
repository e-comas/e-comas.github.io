import { PORT_NUMBER } from "./prod-config.mjs";
const origin = `http://localhost:${PORT_NUMBER}`;

const pageURLs = new Set();
export default async function* findPages(browser, originRelativeUrl = "/") {
  const url = new URL(originRelativeUrl, origin);
  if (url.origin !== origin || pageURLs.has(url.pathname)) return;

  const page = await browser.newPage();
  pageURLs.add(url.pathname);
  url.hash = "";

  const response = await page.goto(url.toString());
  if (!response.ok()) {
    console.warn(
      new Error(
        `Failed to load ${JSON.stringify(
          url
        )}: ${response.status()} ${response.statusText()}`
      )
    );
    return;
  }

  yield page;
  const links = await page.$$("a");
  for (const link of links) {
    yield* findPages(browser, await link.evaluate((link) => link.href));
  }
}
