import * as sass from "sass";
import { PROJECT_DIR } from "./dev-config.mjs";

/**
 * @param {string} file Path to SASS file
 * @returns {Promise<string>} CSS
 */
export default function sass2css(file) {
  return sass
    .compileAsync(file, {
      sourceMap: true,
    })
    .then(
      ({ css, sourceMap }) =>
        css +
        `\n/*# sourceMappingURL=data:application/json,${encodeURIComponent(
          JSON.stringify({
            ...sourceMap,
            sources: sourceMap.sources.map((url) =>
              url.slice(PROJECT_DIR.href.length - 1)
            ),
          })
        )} */\n`
    );
}
