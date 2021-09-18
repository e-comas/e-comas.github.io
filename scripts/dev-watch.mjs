import { watch } from "node:fs/promises";

import { INPUT_DIR } from "./dev-config.mjs";
import { sendRebuildSignal } from "./dev-build-js-from-worker.mjs";
import { refreshBrowser, startServer } from "./dev-server.mjs";

startServer();

const watcher = watch(INPUT_DIR, { recursive: true });
let antiRebound;
for await (const { eventType, filename } of watcher) {
  console.log(eventType, filename);
  if (antiRebound !== filename) {
    sendRebuildSignal(filename);
    antiRebound = filename;
    setTimeout(() => {
      if (antiRebound === filename) antiRebound = null;
    }, 5000);
    refreshBrowser();
  }
}
