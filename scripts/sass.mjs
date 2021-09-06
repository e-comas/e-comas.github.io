import { fileURLToPath } from "node:url";
import sass from "sass";

export default function sass2css(url) {
  const file = fileURLToPath(url);
  return new Promise((resolve, reject) =>
    sass.render(
      {
        file,
        sourceMap: "true",
        sourceMapEmbed: true,
      },
      (err, result) => (err ? reject(err) : resolve(result))
    )
  ).then(({ css }) => css.toString());
}
