import { spawn, spawnSync } from "node:child_process";
import { webcrypto as crypto } from "node:crypto";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";

let ffmpegPath = process.env.FFMPEG;
function getFfmpegPath() {
  if (!ffmpegPath) {
    const cp = spawnSync("/bin/sh", ["-c", "command -v ffmpeg"], {
      encoding: "utf-8",
      shell: false,
      stdio: ["ignore", "pipe", "inherit"],
    });
    if (cp.status !== 0) {
      throw cp.error ?? new Error("Cannot find ffmpeg executable on path");
    }
    ffmpegPath = cp.stdout.trim();
  }
  return ffmpegPath;
}

const dir = mkdtempSync(path.join(os.tmpdir(), "animated-images-"));
export function spawnFfmpegProcess(options) {
  const output = path.join(dir, crypto.randomUUID());
  const cp = spawn(
    getFfmpegPath(),
    [
      ...Object.entries(options)
        .map(([key, value]) =>
          value === undefined ? `-${key}` : [`-${key}`, value]
        )
        .flat(1),
      output,
    ],
    {
      stdio: ["pipe", "inherit", "inherit"],
      shell: false,
    }
  );
  return new Promise((resolve, reject) => {
    cp.on("error", reject);
    cp.on("exit", (code) => (code ? reject() : resolve(output)));
  });
}

export default function buildAnimatedImage(i) {
  return spawnFfmpegProcess({
    i,
    loop: 0,
    an: undefined, // disables audio
    vsync: 0,
    f: "gif",
  });
}
