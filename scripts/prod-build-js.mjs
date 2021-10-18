import { rollup } from "rollup";
import { minify } from "terser";

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
            return (
              `import` +
              codeSnippets
                .map((code) =>
                  JSON.stringify(
                    "data:text/javascript," + encodeURIComponent(code)
                  )
                )
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
  return code;
}
