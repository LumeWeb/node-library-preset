import { resolve } from "node:path";
export const DEFAULT_VARIABLE = {
    source: "src",
};
export default async function () {
    let DIR;
    if (typeof `${process.platform === 'win32' ? '' : '/'}${/file:\/{2,3}(.+)\/[^/]/.exec(import.meta.url)[1]}` === "undefined") {
        DIR = (await import("./path.mjs")).default();
    }
    else {
        DIR = `${process.platform === 'win32' ? '' : '/'}${/file:\/{2,3}(.+)\/[^/]/.exec(import.meta.url)[1]}`;
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
                    moduleResolution: "nodenext",
                },
            },
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUtwQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUM7QUFNRixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7SUFDbEIsSUFBSSxHQUFXLENBQUM7SUFFaEIsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLEVBQUU7UUFDcEMsR0FBRyxHQUFHLENBQUMsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM3QztTQUFNO1FBQ0wsR0FBRyxHQUFHLFNBQVMsQ0FBQztLQUNqQjtJQUVELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWxELE9BQU87UUFDTCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztRQUNwQyxRQUFRLEVBQUU7WUFDUiwwQkFBMEIsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQztZQUM1RCxpQkFBaUIsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDO1NBQ3pEO1FBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQTBCLENBQUM7UUFDeEMsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixtQkFBbUIsRUFBRTtZQUNuQixRQUFRLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLEtBQUs7YUFDbkI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixRQUFRLEVBQUU7Z0JBQ1IsZUFBZSxFQUFFO29CQUNmLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7b0JBQ3RCLGdCQUFnQixFQUFFLFVBQVU7aUJBQzdCO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIn0=