import { createReadStream } from "node:fs";

import { AUTO_REFRESH_MODULE, INPUT_DIR, OUTPUT_DIR } from "./dev-config.mjs";
import sass from "./sass.mjs";

export default async function router(req, res) {
  if (req.url === "/") req.url = "/home/index.html";
  else if (req.url === `/${AUTO_REFRESH_MODULE}`) {
    res.setHeader("Content-Type", "application/javascript");
    const stream = createReadStream(
      new URL(AUTO_REFRESH_MODULE, import.meta.url)
    );
    stream.on("error", (e) => {
      console.error(e);
      res.statusCode = 500;
      res.end();
    });
    stream.pipe(res);
    return;
  }

  const url = new URL(
    req.url === "/"
      ? "./index.html"
      : new URL(req.url, "root://").toString().replace("root://", "."),
    OUTPUT_DIR
  );

  if (/^\/\S+\.css/.test(req.url)) {
    try {
      const css = await sass(
        new URL(
          url
            .toString()
            .replace(OUTPUT_DIR.toString(), "./")
            .replace(".css", ".scss"),
          INPUT_DIR
        )
      );
      res.setHeader("Content-Type", "text/css");
      res.end(css);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Internal Error");
    }
    return;
  }

  try {
    try {
      const stream = createReadStream(url);
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("close", resolve);
        stream.pipe(res);
      });
    } catch (err) {
      if (err?.code === "EISDIR") {
        if (req.url.endsWith("/") || /^[^?]+\/\?/.test(req.url)) {
          const stream = createReadStream(new URL("./index.html", url));
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
