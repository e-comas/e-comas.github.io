import { writeFile } from "node:fs/promises";

import { rollup } from "rollup";
import { minify } from "terser";

import { OUTPUT_DIR } from "./prod-config.mjs";
import createHash from "./prod-hash.mjs";

export default async function buildRuntimeJS(codeSnippets) {
  if (!codeSnippets?.length) return;
  const bundle = await rollup({
    input: "runtimeModules",
    plugins: [
      {
        name: "build",
        resolveId(id) {
          return id === "runtimeModules" ||
            id.startsWith("data:text/javascript,")
            ? id
            : null;
        },
        load(id) {
          if (id.startsWith("data:text/javascript,")) {
            return decodeURIComponent(id.slice("data:text/javascript,".length));
          }
          if (id === "runtimeModules") {
            if (codeSnippets.length === 0) return "";
            return (
              `import` +
              codeSnippets
                .map((jsModulePath) => JSON.stringify(encodeURI(jsModulePath)))
                .join(";import")
            );
          }
        },
      },
    ],
  });
  const { output } = await bundle.generate({
    sourcemap: "hidden",
    format: "esm",
  });
  const { code } = await minify(output[0].code, {
    sourceMap: false,
    module: true,
    ecma: 2017,
    compress: { unsafe: true },
  });

  const hash = createHash(code);
  const fileName = `${hash}.js`;
  await writeFile(new URL(fileName, OUTPUT_DIR), code);
  console.log("written to disk", fileName);
  return fileName;
}
