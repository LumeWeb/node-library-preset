import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { PresetAsset } from "presetter-types";

const DIR = dirname(fileURLToPath(import.meta.url));

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
      ".circleci/config.yml": resolve(TEMPLATES, "circleci.yml"),
    },
    variable: DEFAULT_VARIABLE,
    supplementaryConfig: {
      prettier: {
        singleQuote: false,
      },
    },
  };
}
