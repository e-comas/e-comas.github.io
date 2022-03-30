import { cp } from "fs/promises";

import { INPUT_DIR, OUTPUT_DIR } from "./prod-config.mjs";

export default async function copyStaticFiles() {
  const statics = ["./admin/", "./_config.yml"];

  for (const name of statics) {
    await cp(new URL(name, INPUT_DIR), new URL(name, OUTPUT_DIR), {
      recursive: true,
      force: true,
    });
  }
}
