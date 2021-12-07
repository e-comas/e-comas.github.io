import process from "node:process";
import { pathToFileURL } from "node:url";
import { INPUT_DIR } from "./dev-config.mjs";

const PLUGIN_HELPER = "rollup-plugin:runtime-createScriptElement";
const tsRuntime = /^runtime:.+\.js$/;

async function createScriptElement(relativeUrl, id) {
  const script = document.createElement("script");
  script.type =
    process.env.NODE_ENV === "production" ? "future-module" : "module";
  script.src = relativeUrl;
  script.dataset.file = id;
  return document.head.appendChild(script);
}

const modulesToTransform = new Set();
export default function plugin() {
  return {
    name: "runtime",
    async resolveId(source, importer, options) {
      // This signals that rollup should not ask other plugins or check the file
      // system to find this id.
      if (source === PLUGIN_HELPER) return PLUGIN_HELPER;

      const result =
        tsRuntime.test(source) &&
        (await this.resolve(source.slice(8, -2) + "ts", importer, options));
      modulesToTransform.add(result?.id);
      return result ? `runtime-resolved:${result.id}` : null;
    },
    load(id) {
      if (id === PLUGIN_HELPER) {
        return `export default ${createScriptElement};`;
      } else if (id.startsWith("runtime-resolved:")) {
        const path = id.slice("runtime-resolved:".length);
        return `import helper from "${PLUGIN_HELPER}";export default helper(${JSON.stringify(
          pathToFileURL(path).toString().slice(INPUT_DIR.toString().length)
        )}, ${JSON.stringify(path)})`;
      }
    },
  };
}
