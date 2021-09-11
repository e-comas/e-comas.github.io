import { createHash as create } from "node:crypto";

const algorithm = "sha256";

export default function createHash(str) {
  const hash = create(algorithm);
  hash.update(str);
  return hash.digest("hex");
}
