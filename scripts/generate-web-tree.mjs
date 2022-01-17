import { PORT_NUMBER } from "./prod-config.mjs";
const origin = `http://localhost:${PORT_NUMBER}`;

function loadContentFromTSXModule(tsxUrl) {
  console.log("trying to import", tsxUrl);
  return import(tsxUrl);
}

const pageURLs = new Set();
export default async function* findPages(
  browser,
  originRelativeUrl = "/_layouts/blog.html"
) {
  const url = new URL(originRelativeUrl, origin);
  if (url.pathname === "/") url.pathname = "/index.html";
  if (url.origin !== origin || pageURLs.has(url.pathname)) return;

  const page = await browser.newPage();
  pageURLs.add(url.pathname);

  await page.goto(url.toString());
  await page.evaluate((env) => (window.process = { env }), process.env);
  try {
    const { default: yamlFrontMatter } = await page.evaluate(
      loadContentFromTSXModule,
      url.pathname.replace(/\.html$/, ".tsx")
    );
    if (yamlFrontMatter) {
      const { content } = page;
      page.content = async function () {
        return (
          yamlFrontMatter + (await Reflect.apply(content, this, arguments))
        );
      };
    }
  } catch (err) {
    console.warn(originRelativeUrl, "404?", err);
    return;
  }

  yield page;
  // If `href` contains "{{ }}", it's a Liquid tag that we should leave alone for Jekyll to handle.
  const links = await page.$$("a:not([href*='{{'],[href*='}}'])");
  for (const link of links) {
    yield* findPages(browser, await link.evaluate((link) => link.href));
  }
}
