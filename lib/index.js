"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_VARIABLE = void 0;
const node_path_1 = require("node:path");
const node_url_1 = require("node:url");
let DIR;
if (typeof __dirname === "undefined") {
    DIR = (0, node_path_1.dirname)((0, node_url_1.fileURLToPath)(import.meta.url));
}
else {
    DIR = __dirname;
}
const TEMPLATES = (0, node_path_1.resolve)(DIR, "..", "templates");
exports.DEFAULT_VARIABLE = {
    source: "src",
};
async function default_1() {
    return {
        extends: ["presetter-preset-strict"],
        template: {
            ".github/workflows/ci.yml": (0, node_path_1.resolve)(TEMPLATES, "ci.yml.raw"),
            ".releaserc.json": (0, node_path_1.resolve)(TEMPLATES, ".releaserc.json"),
        },
        noSymlinks: [".github/workflows/ci.yml"],
        variable: exports.DEFAULT_VARIABLE,
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
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLHVDQUF5QztBQUl6QyxJQUFJLEdBQVcsQ0FBQztBQUVoQixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtJQUVwQyxHQUFHLEdBQUcsSUFBQSxtQkFBTyxFQUFDLElBQUEsd0JBQWEsRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDL0M7S0FBTTtJQUNMLEdBQUcsR0FBRyxTQUFTLENBQUM7Q0FDakI7QUFHRCxNQUFNLFNBQVMsR0FBRyxJQUFBLG1CQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNyQyxRQUFBLGdCQUFnQixHQUFHO0lBQzlCLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQztBQU1hLEtBQUs7SUFDbEIsT0FBTztRQUNMLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BDLFFBQVEsRUFBRTtZQUNSLDBCQUEwQixFQUFFLElBQUEsbUJBQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO1lBQzVELGlCQUFpQixFQUFFLElBQUEsbUJBQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7U0FDekQ7UUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUN4QyxRQUFRLEVBQUUsd0JBQWdCO1FBQzFCLG1CQUFtQixFQUFFO1lBQ25CLFFBQVEsRUFBRTtnQkFDUixXQUFXLEVBQUUsS0FBSzthQUNuQjtZQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLFFBQVEsRUFBRTtnQkFDUixlQUFlLEVBQUU7b0JBQ2YsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztpQkFDdkI7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFyQkQsNEJBcUJDIn0=