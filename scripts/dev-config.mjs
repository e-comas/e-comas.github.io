// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// export const __dirname = path.dirname(__filename);

export const PROJECT_DIR = new URL("../", import.meta.url);
export const INPUT_DIR = new URL("../src/", import.meta.url);
export const OUTPUT_DIR = new URL("../_site/", import.meta.url);

export const AUTO_REFRESH_MODULE = "autoRefresh.mjs";

export const PORT_NUMBER = 8080;
