import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { INPUT_DIR } from "./dev-config.mjs";
import { updateTSInteropFiles } from "./dev-build-toml-d-ts.mjs";
import { getTOMLKeys } from "./rollup-plugin-toml.mjs";

const getTOMLKeysFromFileDescriptor = (fd) =>
  fd.readFile("utf8").then(getTOMLKeys);

export async function createInteropFilesFromTOMLFile(tomlFile) {
  if (!(tomlFile.pathname || tomlFile).endsWith(".toml")) {
    return;
  }
  try {
    const fd = await fs.open(tomlFile, "r");
    const tomlKeys = await getTOMLKeysFromFileDescriptor(fd)
      .catch((message) => {
        const error = new Error(message);
        error.fileName = tomlFile;
        return Promise.reject(error);
      })
      .finally(() => fd.close());
    return updateTSInteropFiles(fileURLToPath(tomlFile), tomlKeys);
  } catch (e) {
    console.error(e);
  }
}

export const createAllTOMLInteropFiles = async (dir = INPUT_DIR) => {
  const promises = [];
  const dh = await fs.opendir(dir);
  for await (const dirent of dh) {
    if (dirent.isDirectory()) {
      createAllTOMLInteropFiles(new URL(`./${dirent.name}/`, dir));
    } else {
      promises.push(createInteropFilesFromTOMLFile(new URL(dirent.name, dir)));
    }
  }

  return Promise.all(promises);
};

await createAllTOMLInteropFiles();
