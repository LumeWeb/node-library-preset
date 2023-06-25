import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export default function () {
  return dirname(fileURLToPath(import.meta.url));
}
