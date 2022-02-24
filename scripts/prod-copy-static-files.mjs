import { cp } from "fs/promises";

import { INPUT_DIR, OUTPUT_DIR } from "./prod-config.mjs";

export default async function copyStaticFiles() {
  const staticDirs = ["./admin/"];

  for (const dirName of staticDirs) {
    await cp(new URL(dirName, INPUT_DIR), new URL(dirName, OUTPUT_DIR), {
      recursive: true,
      force: true,
    });
  }
}
