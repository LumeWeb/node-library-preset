import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const DIR = dirname(fileURLToPath(import.meta.url));
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
            tsconfig: {
                compilerOptions: {
                    lib: ["ES2021"],
                },
            },
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUl6QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUdwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUM7QUFNRixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7SUFDbEIsT0FBTztRQUNMLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BDLFFBQVEsRUFBRTtZQUNSLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO1lBQzVELGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7U0FDekQ7UUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUN4QyxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLG1CQUFtQixFQUFFO1lBQ25CLFFBQVEsRUFBRTtnQkFDUixXQUFXLEVBQUUsS0FBSzthQUNuQjtZQUNELFFBQVEsRUFBRTtnQkFDUixlQUFlLEVBQUU7b0JBQ2YsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO2lCQUNoQjthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQyJ9