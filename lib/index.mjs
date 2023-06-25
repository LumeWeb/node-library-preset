import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
let DIR;
if (typeof `${process.platform === 'win32' ? '' : '/'}${/file:\/{2,3}(.+)\/[^/]/.exec(import.meta.url)[1]}` === "undefined") {
    DIR = dirname(fileURLToPath(import.meta.url));
}
else {
    DIR = `${process.platform === 'win32' ? '' : '/'}${/file:\/{2,3}(.+)\/[^/]/.exec(import.meta.url)[1]}`;
}
const TEMPLATES = resolve(DIR, "..", "templates");
export const DEFAULT_VARIABLE = {
    source: "src",
};
export default async function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUl6QyxJQUFJLEdBQVcsQ0FBQztBQUVoQixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtJQUVwQyxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDL0M7S0FBTTtJQUNMLEdBQUcsR0FBRyxTQUFTLENBQUM7Q0FDakI7QUFHRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUM7QUFNRixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7SUFDbEIsT0FBTztRQUNMLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BDLFFBQVEsRUFBRTtZQUNSLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO1lBQzVELGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7U0FDekQ7UUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUN4QyxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLG1CQUFtQixFQUFFO1lBQ25CLFFBQVEsRUFBRTtnQkFDUixXQUFXLEVBQUUsS0FBSzthQUNuQjtZQUNELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLFFBQVEsRUFBRTtnQkFDUixlQUFlLEVBQUU7b0JBQ2YsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztpQkFDdkI7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMifQ==