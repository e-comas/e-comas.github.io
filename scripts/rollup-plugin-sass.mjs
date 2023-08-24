import { fileURLToPath, pathToFileURL } from "node:url";
import sass2css from "./dev-build-sass.mjs";

const PLUGIN_HELPER = "rollup-plugin:sass-createStyleElement";

function createStyleElement(css, id) {
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);
  style.dataset.file = id;
  return style;
}

export default function plugin() {
  return {
    name: "sass",
    resolveId(source, importer) {
      if (source === PLUGIN_HELPER) {
        // It is important that side effects are always respected for polyfills,
        // otherwise using "treeshake.moduleSideEffects: false" may prevent the
        // polyfill from being included.
        return { id: PLUGIN_HELPER, moduleSideEffects: true };
      }
      // This signals that rollup should not ask other plugins or check the file
      // system to find this id.
      return source.endsWith(".scss")
        ? fileURLToPath(new URL(source, pathToFileURL(importer)))
        : null;
    },
    load(id) {
      if (id === PLUGIN_HELPER) {
        return `export default ${createStyleElement};`;
      } else if (id.endsWith(".scss")) {
        return sass2css(id).then((css) => {
          css += String.raw`:not(picture) > img:not([src$=".svg"]), img:not([src^="/"]) {
          outline: solid 1rem cyan;
          filter: invert(1);
        }`;
          return `import helper from "${PLUGIN_HELPER}";export default helper(${JSON.stringify(
            css
          )},${JSON.stringify(id)})`;
        });
      }
    },
  };
}
