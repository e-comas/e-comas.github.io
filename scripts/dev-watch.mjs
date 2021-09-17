import { watch, promises as fs } from "fs";

import { INPUT_DIR } from "./dev-config.mjs";
import { sendRebuildSignal } from "./dev-build-js-from-worker.mjs";
import { refreshBrowser } from "./dev-server.mjs";
import { startServer } from "./dev-server.mjs";

let antiRebound;
const watcher = (event, fileName) => {
  console.log(event, fileName);
  if (antiRebound !== fileName) {
    sendRebuildSignal(fileName);
    antiRebound = fileName;
    setTimeout(() => {
      if (antiRebound === fileName) antiRebound = null;
    }, 5000);
    refreshBrowser();
  }
};

const watchFile = (path) => watch(path, watcher);
const watchDir = async (dir) => {
  const promises = [];
  const dh = await fs.opendir(dir);
  for await (const dirent of dh) {
    if (dirent.isDirectory()) {
      promises.push(new URL(`./${dirent.name}/`, dir));
    } else {
      watchFile(new URL("./" + dirent.name, dir));
    }
  }

  return Promise.all(promises.map(watchDir));
};

watchDir(INPUT_DIR)
  .then(() => startServer())
  .catch(console.error);
