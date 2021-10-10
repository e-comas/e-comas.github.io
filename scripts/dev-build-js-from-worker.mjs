import { fileURLToPath } from "url";
import { Worker, isMainThread, parentPort } from "worker_threads";
import { INPUT_DIR } from "./dev-config.mjs";

let jobs = [];
let idCounter = 0;
let worker;

const startWorker = () => {
  // This re-loads the current file inside a Worker instance.
  worker = new Worker(new URL(import.meta.url));
  worker.on("message", ({ id, result, error }) => {
    worker.unref();
    if (error) {
      jobs[id].reject(error);
    } else {
      jobs[id].resolve(result);
    }
  });
  worker.on("error", (error) => {
    jobs.forEach(({ reject }) => reject(error));
    worker.terminate();
    worker = null;
  });
};

const getWorker = (keepAlive = false) => {
  if (worker == null) {
    startWorker();
    if (!worker.keepAlive) {
      worker.unref();
    }
  } else if (keepAlive) {
    worker.ref();
  }
  return worker;
};

if (isMainThread) {
  startWorker();
} else {
  parentPort.on("message", ({ id, rebuild, urlOrPath }) => {
    if (rebuild?.endsWith?.(".toml")) {
      import("./dev-generate-toml-interop-files.mjs")
        .then((module) =>
          module.createInteropFilesFromTOMLFile(new URL(rebuild, INPUT_DIR))
        )
        .catch(console.error);
    }
    if (urlOrPath != null)
      import("./dev-build-js.mjs")
        .then((module) => module.default(urlOrPath))
        .then((result) => ({ result }))
        .catch((error) => ({ error }))
        .then((cache) => parentPort.postMessage({ id, ...cache }));
  });
}

export function sendRebuildSignal(fileName) {
  getWorker().postMessage({ rebuild: fileName });
}

export default (urlOrPath) =>
  new Promise((resolve, reject) => {
    const id = idCounter++;
    jobs[id] = { resolve, reject };
    if (typeof urlOrPath !== "string") urlOrPath = fileURLToPath(urlOrPath);
    getWorker(true).postMessage({ id, urlOrPath });
  });
