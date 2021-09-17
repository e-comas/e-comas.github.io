import { HTML_TEMPLATE_FILE_NAME, PORT_NUMBER } from "./prod-config.mjs";
const origin = `http://localhost:${PORT_NUMBER}`;

function loadContentFromTSXModule(tsxUrl) {
  console.log("trying to import", tsxUrl);
  return import(tsxUrl)
    .then((module) => module.default)
    .then(console.log);
}

const pageURLs = new Set();
export default async function* findPages(browser, originRelativeUrl = "/") {
  const url = new URL(originRelativeUrl, origin);
  if (url.pathname === "/") url.pathname = "/index.html";
  if (url.origin !== origin || pageURLs.has(url.pathname)) return;

  const page = await browser.newPage();
  pageURLs.add(url.pathname);

  await page.goto(url.toString());
  await page.evaluate((env) => (window.process = { env }), process.env);
  try {
    await page.evaluate(
      loadContentFromTSXModule,
      url.pathname.replace(/\.html$/, ".tsx")
    );
  } catch (err) {
    console.warn(originRelativeUrl, "404?", err);
    return;
  }

  yield page;
  const links = await page.$$("a");
  for (const link of links) {
    yield* findPages(browser, await link.evaluate((link) => link.href));
  }
}
