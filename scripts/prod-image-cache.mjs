import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";
import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";

let exports;
if (isMainThread) {
  let id = -1;
  exports = class CacheMap {
    #worker;
    #pendingJobs = [];
    #fulfilledJobs = 0;

    constructor(fileUrl) {
      this.#worker = new Worker(new URL(import.meta.url), {
        workerData: { fileUrl: fileURLToPath(fileUrl) },
      });

      this.#worker.on("message", ({ id, error, value }) => {
        if (++this.#fulfilledJobs === this.#pendingJobs.length) {
          this.#worker.unref();
        }
        if (error != null) {
          const err = new Error("received an error from the worker");
          err.cause = error;
          this.#pendingJobs[id](Promise.reject(err));
        } else {
          this.#pendingJobs[id](value);
        }
      });
    }

    async get(key, width) {
      this.#worker.ref();
      const promise = new Promise((r) => {
        this.#pendingJobs[++id] = r;
      });
      this.#worker.postMessage({ command: "get", args: [key, width], id });
      return promise;
    }

    async set(key, width, codec, fileName) {
      this.#worker.ref();
      const promise = new Promise((r) => {
        this.#pendingJobs[++id] = r;
      });
      this.#worker.postMessage({
        command: "set",
        args: [key, width, codec, fileName],
        id,
      });
      return promise;
    }
  };
} else {
  class CacheMap {
    #csvHandle;
    #content;

    constructor(fileUrl) {
      this.#csvHandle = fs.open(fileUrl, "r+").catch(async (err) => {
        if (err.code === "ENOENT") {
          this.#content = {};
          return fs.open(fileUrl, "w");
        }
        throw err;
      });
    }

    async #read() {
      const fd = await this.#csvHandle;
      if (this.#content != null) return this.#content;
      try {
        const content = {};
        for await (const line of createInterface({
          input: createReadStream(null, { fd, autoClose: false }),
        })) {
          const lineSplit = line.split(",");
          if (lineSplit.length !== 4) {
            throw new Error("Failed to recover, erasing cache file");
          }
          const [key, width, codec, fileName] = lineSplit;
          content[key] ??= {};
          content[key][width] ??= {};
          content[key][width][codec] = fileName;
        }
        return content;
      } catch (err) {
        await fd.truncate(0);
        console.error(err);
        return {};
      }
    }

    async get(key, width) {
      this.#content ??= await this.#read();
      return this.#content[key]?.[width];
    }

    async set(key, width, codec, fileName) {
      this.#content ??= await this.#read();
      this.#content[key] ??= {};
      this.#content[key][width] ??= {};
      this.#content[key][width][codec] = fileName;

      const fh = await this.#csvHandle;
      await fh.write(Array.from(arguments).join(",") + "\n");
    }
  }

  async function* jobListGenerator() {
    let previousJob, job;
    while (1) {
      await job;
      job = previousJob;
      previousJob = yield;
    }
  }
  const jobList = jobListGenerator();
  let cache;
  parentPort.on("message", async ({ command, args, id }) => {
    cache ??= new CacheMap(workerData.fileUrl);
    let yieldToFutureJobs;
    const promise = new Promise((r) => {
      yieldToFutureJobs = r;
    });
    promise.id = id;
    await jobList.next(promise);
    try {
      parentPort.postMessage({ id, value: await cache[command](...args) });
    } catch (err) {
      parentPort.postMessage({
        id,
        error: { message: err.message, stack: err.stack },
      });
    } finally {
      yieldToFutureJobs();
    }
  });
}

export default exports;
