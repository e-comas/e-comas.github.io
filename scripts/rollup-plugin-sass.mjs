import sass from "sass";

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
    resolveId(source) {
      // This signals that rollup should not ask other plugins or check the file
      // system to find this id.
      return source.endsWith(".scss") || source === PLUGIN_HELPER
        ? source
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
