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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUl6QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUdwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUM7QUFNRixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7SUFDbEIsT0FBTztRQUNMLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3BDLFFBQVEsRUFBRTtZQUNSLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO1NBQzNEO1FBQ0QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixtQkFBbUIsRUFBRTtZQUNuQixRQUFRLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLEtBQUs7YUFDbkI7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDIn0=