import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export default function () {
  // @ts-ignore
  return dirname(fileURLToPath(import.meta.url));
}
