import { fileURLToPath } from "node:url";
import _sass from "sass";

export default function sass(url) {
  const file = fileURLToPath(url);
  return new Promise((resolve, reject) =>
    _sass.render(
      {
        file,
        sourceMap: "true",
        sourceMapEmbed: true,
      },
      (err, result) => (err ? reject(err) : resolve(result))
    )
  ).then(({ css }) => css.toString());
}
