// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// export const __dirname = path.dirname(__filename);

export const PROJECT_DIR = new URL("../", import.meta.url);
export const INPUT_DIR = new URL("../src/", import.meta.url);

export const AUTO_REFRESH_MODULE = "/autoRefresh.mjs";
export const HTML_TEMPLATE_FILE_NAME = "template.html";

export const PORT_NUMBER = 8080;
