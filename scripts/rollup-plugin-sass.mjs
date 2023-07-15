import { fileURLToPath, pathToFileURL } from "node:url";
import * as sass from "sass";

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
        return new Promise((resolve, reject) =>
          sass.render(
            {
              file: id,
              sourceMap: "true",
              sourceMapEmbed: true,
            },
            (err, result) => (err ? reject(err) : resolve(result))
          )
        ).then(
          ({ css }) =>
            `import helper from "${PLUGIN_HELPER}";export default helper(${JSON.stringify(
              css.toString()
            )},${JSON.stringify(id)})`
        );
      }
    },
  };
}
