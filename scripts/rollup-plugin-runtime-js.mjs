import process from "node:process";
import { pathToFileURL } from "node:url";
import { PROJECT_DIR } from "./dev-config.mjs";

const PLUGIN_HELPER = "runtime:createScriptElement";
const tsRuntime = /^runtime:.+\.js$/;

function createScriptElement(js, id) {
  const script = document.createElement("script");
  script.type =
    process.env.NODE_ENV === "production" ? "future-module" : "module";
  script.textContent = js;
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
      return result?.id;
    },
    load(id) {
      if (id === PLUGIN_HELPER) {
        return `export default ${createScriptElement};`;
      }
    },
    transform(code, id) {
      if (modulesToTransform.has(id)) {
        const map = this.getCombinedSourcemap();
        delete map.sourcesContent;
        map.sources = map.sources.map((path) =>
          pathToFileURL(path).toString().slice(PROJECT_DIR.toString().length)
        );
        return {
          code: `import helper from "${PLUGIN_HELPER}";export default helper(${JSON.stringify(
            code +
              "\n//# sourceMappingURL=data:application/json," +
              encodeURI(JSON.stringify(map))
          )},${JSON.stringify(id)})`,
          map: null,
        };
      }
    },
  };
}
