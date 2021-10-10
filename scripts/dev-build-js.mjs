import resolve from "@rollup/plugin-node-resolve";
import surcase from "@rollup/plugin-sucrase";
import { rollup } from "rollup";
import sass from "./rollup-plugin-sass.mjs";
import toml from "./rollup-plugin-toml.mjs";

import tsConfig from "../tsconfig.json" assert { type: "json" };

const plugins = [
  surcase({
    jsxFragmentPragma: tsConfig.compilerOptions.jsxFragmentFactory,
    jsxPragma: tsConfig.compilerOptions.jsxFactory,
    transforms: ["jsx", "typescript"],
    disableESTransforms: true,
    include: ["**.tsx", "**.ts"],
    production: true,
  }),
  resolve(),
  toml(),
  sass(),
];

let cache;

async function buildWithCache(input) {
  const bundle = await rollup({
    input,
    plugins,
    cache,
  });
  cache = bundle.cache;

  return bundle;
}

export function resetTsPlugin() {
  // No longer needed with Surcase
  // plugins[0] = typescript();
}

export default (urlOrPath) =>
  buildWithCache(urlOrPath).then((bundle) =>
    bundle.generate({ sourcemap: "hidden", format: "esm" })
  );
