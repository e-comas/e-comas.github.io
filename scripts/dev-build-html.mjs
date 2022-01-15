import { readFile } from "node:fs/promises";
import {
  AUTO_REFRESH_MODULE,
  HTML_TEMPLATE_FILE_NAME,
  INPUT_DIR,
} from "./dev-config.mjs";
// import getRuntimeModules from "./runtime-modules.mjs";

const templateFileCache = new Map();
function getTemplateFile(url) {
  const templateURL = new URL(
    HTML_TEMPLATE_FILE_NAME,
    new URL("." + url, INPUT_DIR)
  );

  let HTML_TEMPLATE_FILE = templateFileCache.get(templateURL.pathname);

  if (HTML_TEMPLATE_FILE == null) {
    HTML_TEMPLATE_FILE = readFile(templateURL, "utf-8");
    templateFileCache.set(templateURL.pathname, HTML_TEMPLATE_FILE);
  }

  return HTML_TEMPLATE_FILE;
}

export default (url) =>
  Promise.all([
    import("jsdom"),
    getTemplateFile(url),
    //     getRuntimeModules(),
  ]).then(
    ([
      {
        default: { JSDOM },
      },
      htmlContent,
      runTimeModules = [],
    ]) => {
      const dom = new JSDOM(htmlContent);
      const { window } = dom;
      const { document } = window;

      const BUNDLE_NAME = url.replace(/\.html(\?.*)?$/, ".tsx");

      const script = document.createElement("script");
      script.textContent = `process={env:${JSON.stringify(process.env)}}`;
      document.head.append(script);

      document.head.append(
        ...[BUNDLE_NAME, AUTO_REFRESH_MODULE]
          .concat(runTimeModules.map(([url]) => url))
          .map((relativePath) => {
            const scriptTag = document.createElement("script");
            scriptTag.type = "module";
            scriptTag.src = relativePath;
            return scriptTag;
          })
      );
      const noScriptAlert = document.createElement("noscript");
      const removeDialogScript = document.createElement("script");
      const dialog = document.createElement("dialog");
      dialog.open = true;
      dialog.id = "placeholder-dialog";
      dialog.append(
        document.createElement("progress"),
        " Building application...",
        noScriptAlert
      );
      noScriptAlert.append(
        document.createElement("br"),
        document.createElement("br"),
        "Warning, your browser in on no-script mode!"
      );
      removeDialogScript.textContent = `import(${JSON.stringify(BUNDLE_NAME)})
        .then(()=>document.getElementById(${JSON.stringify(
          dialog.id
        )}).remove())
        .catch(e=>{document.body.textContent=e.message})`;
      document.body.append(dialog, removeDialogScript);
      return dom.serialize();
    }
  );
