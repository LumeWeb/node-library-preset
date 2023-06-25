import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { PresetAsset } from "presetter-types";

let DIR: string;

if (typeof __dirname === "undefined") {
  // @ts-ignore
  DIR = dirname(fileURLToPath(import.meta.url));
} else {
  DIR = __dirname;
}

// paths to the template directory
const TEMPLATES = resolve(DIR, "..", "templates");
export const DEFAULT_VARIABLE = {
  source: "src",
};

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  return {
    extends: ["presetter-preset-strict"],
    template: {
      ".github/workflows/ci.yml": resolve(TEMPLATES, "ci.yml.raw"),
      ".releaserc.json": resolve(TEMPLATES, ".releaserc.json"),
    },
    noSymlinks: [".github/workflows/ci.yml"],
    variable: DEFAULT_VARIABLE,
    supplementaryConfig: {
      prettier: {
        singleQuote: false,
      },
      gitignore: [".releaserc.json"],
      tsconfig: {
        compilerOptions: {
          lib: ["ES2021", "dom"],
        },
      },
    },
  };
}
