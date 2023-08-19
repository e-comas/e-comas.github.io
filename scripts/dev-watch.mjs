import { watch } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { INPUT_DIR } from "./dev-config.mjs";
import { sendRebuildSignal } from "./dev-build-js-from-worker.mjs";
import { refreshBrowser, startServer } from "./dev-server.mjs";

startServer();

const watcher = watch(INPUT_DIR, { recursive: true });
let antiReboundForSameFile, antiReboundForAnyFile;
for await (const { eventType, filename } of watcher) {
  console.log(eventType, filename);
  if (antiReboundForSameFile !== filename) {
    if (antiReboundForAnyFile != null) clearTimeout(antiReboundForAnyFile);
    sendRebuildSignal(filename);
    antiReboundForSameFile = filename;
    setTimeout(() => {
      if (antiReboundForSameFile === filename) antiReboundForSameFile = null;
    }, 3000);
    antiReboundForAnyFile = setTimeout(() => {
      refreshBrowser(fileURLToPath(new URL(filename, INPUT_DIR)));
      antiReboundForAnyFile = null;
    }, 90);
  }
}
