/* Inspired from https://github.com/shutterstock/postcss-copy-assets. */

import fs from "node:fs";

const cache = new WeakSet();
export default function copyAssets({ base, distBase, urlTransform }) {
  return {
    postcssPlugin: "postcss-copy-assets",
    Declaration(decl) {
      if (!cache.has(decl) && decl.value?.includes("url(")) {
        decl.value = decl.value.replace(/url\((.*?)\)/g, (_, urlMatch) => {
          // Example:
          //   decl.value = 'background: url("../../images/foo.png?a=123");'
          //   urlMatch         = '"../../images/foo.png?a=123"'
          //   copyOpts.base    = 'dist/assets'
          //   postCssOpts.from = 'src/css/page/home.css'
          //   postCssOpts.to   = 'dist/assets/css/home.min.css'

          // "../../images/foo.png?a=123" -> ../../images/foo.png?a=123
          if (/^\s*["']/.test(urlMatch))
            urlMatch = urlMatch.trim().slice(1, -1);
          const url = new URL(
            new URL(urlMatch, "root://").toString().replace("root://", "."),
            base
          );

          if (url.origin !== base.origin) return _;

          let contents;
          try {
            // Read the original file
            contents = fs.readFileSync(url);
          } catch (err) {
            console.warn("Cannot read asset", urlMatch, err.message);
            return _;
          }

          const newAssetFileURL = urlTransform(url, contents);

          const newUrlString = `url(${JSON.stringify(
            newAssetFileURL.pathname.slice(distBase.pathname.length) +
              url.search +
              url.hash
          )})`;

          fs.mkdirSync(new URL(".", newAssetFileURL), { recursive: true });
          fs.writeFileSync(newAssetFileURL, contents);

          cache.add(decl);

          // Return the new url() string
          return newUrlString;
        });
      }
    },
  };
}
