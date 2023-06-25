import { resolve } from "node:path";

import type { PresetAsset } from "presetter-types";

// paths to the template directory
export const DEFAULT_VARIABLE = {
  source: "src",
};

/**
 * get the list of templates provided by this preset
 * @returns list of preset templates
 */
export default async function (): Promise<PresetAsset> {
  let DIR: string;

  if (typeof __dirname === "undefined") {
    DIR = (await import("./path.js")).default();
  } else {
    DIR = __dirname;
  }

  const TEMPLATES = resolve(DIR, "..", "templates");

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
