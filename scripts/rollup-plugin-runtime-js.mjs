import process from "node:process";

const PLUGIN_HELPER = "runtime:createScriptElement";
const tsRuntime = /^runtime:.+\.js$/;

function createScriptElement(js, id) {
  const script = document.createElement("script");
  script.type =
    process.env.NODE_ENV === "production" ? "future-module" : "module";
  script.textContent = js;
  document.head.append(script);
  script.dataset.file = id;
  return script;
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
        return {
          code: `import helper from "${PLUGIN_HELPER}";export default helper(${JSON.stringify(
            code
          )},${JSON.stringify(id)})`,
          map: null,
        };
      }
    },
  };
}
