import { createReadStream } from "node:fs";

import { AUTO_REFRESH_MODULE, INPUT_DIR, PROJECT_DIR } from "./dev-config.mjs";
import getRenderedHTML from "./dev-build-html.mjs";
import buildJS from "./dev-build-js-from-worker.mjs";
import { HTML_TEMPLATE_FILE_NAME } from "./dev-config.mjs";
import buildAnimatedImage from "./dev-build-animated-images.mjs";
import sass2css from "./dev-build-sass.mjs";

const showErrorOnBrowser = function (errorMessage) {
  const d = document.createElement("dialog");
  const h = document.createElement("h2");
  h.append("TypeScript error");
  const p = document.createElement("code");
  p.style.whiteSpace = "pre-wrap";
  p.style.border = "1px solid";
  p.style.display = "block";
  p.style.padding = ".5em";
  p.style.backgroundColor = "lightgray";
  p.append(errorMessage);
  d.append(h, p, "See console for more details.");
  document.body.append(d);
  d.showModal();
};

export default async function router(req, res) {
  if (req.url === AUTO_REFRESH_MODULE) {
    res.setHeader("Content-Type", "application/javascript");
    const stream = createReadStream(
      new URL("." + AUTO_REFRESH_MODULE, import.meta.url),
      { emitClose: false }
    );
    stream.on("error", (e) => {
      console.error(e);
      res.statusCode = 500;
      res.end();
    });
    stream.pipe(res);
    return;
  }

  if (req.url.startsWith("/rollup-plugin:")) {
    res.statusCode = 404;
    res.end("Virtual module, can't load anything");
    return;
  }

  if (req.url.startsWith("/sass?file=")) {
    const url = new URL(req.url, "root://");
    res.setHeader("Cache-Control", "no-store");
    sass2css(url.searchParams.get("file")).then(
      (css) => {
        res.setHeader("Content-Type", "text/css");
        res.end(css);
      },
      (e) => {
        console.error(e);
        res.statusCode = 500;
        res.end();
      }
    );
  }

  if (req.url.startsWith("/src/") || req.url.startsWith("/node_modules/")) {
    if (req.url.includes("/../")) {
      console.error(
        `Aborting ${req.url}: it doesn't look like it's a genuine source-map URL`
      );
      res.statusCode = 500;
      res.end("Internal Error");
      return;
    }
    // URL likely from a source-map
    const stream = createReadStream(new URL("." + req.url, PROJECT_DIR));
    await new Promise((resolve) => {
      stream.on("error", console.error);
      stream.on("close", resolve);
      stream.pipe(res);
    });
    return;
  }

  const url = new URL(
    req.url === "/" || req.url.startsWith("/?")
      ? "./index.html"
      : new URL(req.url, "root://").toString().replace("root://", "."),
    INPUT_DIR
  );

  const mime = {
    __proto__: null,
    ".html": "text/html; charset=UTF-8",
    ".css": "text/css; charset=UTF-8",
    ".avif": "image/avif",
    ".svg": "image/svg+xml",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".ts": "application/javascript; charset=UTF-8",
    ".tsx": "application/javascript; charset=UTF-8",
    ".webp": "image/webp",
    ".mp4": "image/gif",
    ".woff2": "font/woff2",
  };
  const ext = url.pathname
    .slice(url.pathname.lastIndexOf("."))
    .toLocaleLowerCase();
  if (ext in mime) res.setHeader("Content-Type", mime[ext]);
  else console.warn("Unknown extension", ext, req.url);

  if (ext === ".html") {
    if (process.env.NODE_ENV === "production") {
      const stream = createReadStream(
        new URL(HTML_TEMPLATE_FILE_NAME, new URL("." + req.url, INPUT_DIR))
      );
      await new Promise((resolve) => {
        stream.on("error", console.error);
        stream.on("close", resolve);
        stream.pipe(res);
      });
      return;
    }
    const url =
      req.url === "/" || req.url.startsWith("/?")
        ? "/index.tsx"
        : new URL(req.url, "root://").pathname.replace(/\.html$/, ".tsx");
    getRenderedHTML(url)
      .then((html) => res.end(html))
      .catch((e) => {
        console.error(e);
        res.statusCode = 500;
        res.end(
          "<script type=module src='" +
            AUTO_REFRESH_MODULE +
            "'></script><p>Rendering failed</p>"
        );
      });
    return;
  } else if (ext === ".tsx" || ext === ".ts") {
    buildJS(url)
      .then(({ output }) => {
        const [{ code, map }] = output;
        res.write(code);

        // Appends Source map to help debugging
        delete map.sourcesContent;
        res.write("\n//# sourceMappingURL=data:application/json,");
        res.end(encodeURI(JSON.stringify(map)));
      })
      .catch((e) => {
        console.error(e);
        res.statusCode = 206;
        res.end(
          `(${showErrorOnBrowser.toString()})(${JSON.stringify(e.message)})`
        );
      });
    return;
  } else if (ext === ".mp4") {
    buildAnimatedImage(url).then((path) => createReadStream(path).pipe(res));
    return;
  }

  try {
    try {
      const stream = createReadStream(url, { emitClose: false });
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("close", resolve);
        stream.pipe(res);
      });
    } catch (err) {
      if (err?.code === "EISDIR") {
        if (req.url.endsWith("/") || /^[^?]+\/\?/.test(req.url)) {
          const stream = createReadStream(new URL("./index.html", url), {
            emitClose: false,
          });
          await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("close", resolve);
            stream.pipe(res);
          });
        } else {
          res.statusCode = 307;
          const index = req.url.indexOf("?");
          res.setHeader(
            "Location",
            index === -1
              ? `${req.url}/`
              : `${req.url.slice(0, index)}/${req.url.slice(index)}`
          );
          res.end("Temporary Redirect");
        }
      } else {
        throw err;
      }
    }
  } catch (err) {
    if (err?.code === "ENOENT") {
      console.log("404", req.url);
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      console.error(`Error while loading ${req.url}:`);
      console.error(err);
      res.statusCode = 500;
      res.end("Internal Error");
    }
  }
}
