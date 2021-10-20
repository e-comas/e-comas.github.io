import { createHash as create } from "node:crypto";
import { pipeline } from "node:stream/promises";

const algorithm = "sha256";

// TODO: switch default encoding to `base64url`.
export default function createHash(str, encoding = "hex") {
  const hash = create(algorithm);
  hash.update(str);
  return hash.digest(encoding);
}
export async function streamHash(source, encoding = "hex") {
  const hash = create(algorithm);
  hash.setEncoding(encoding);
  return pipeline(source, hash);
}
