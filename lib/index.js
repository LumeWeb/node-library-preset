"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_VARIABLE = void 0;
const node_path_1 = require("node:path");
exports.DEFAULT_VARIABLE = {
    source: "src",
};
async function default_1() {
    let DIR;
    if (typeof __dirname === "undefined") {
        DIR = (await Promise.resolve().then(() => __importStar(require("./path.js")))).default();
    }
    else {
        DIR = __dirname;
    }
    const TEMPLATES = (0, node_path_1.resolve)(DIR, "..", "templates");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFLdkIsUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUM7QUFNYSxLQUFLO0lBQ2xCLElBQUksR0FBVyxDQUFDO0lBRWhCLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO1FBQ3BDLEdBQUcsR0FBRyxDQUFDLHdEQUFhLFdBQVcsR0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDN0M7U0FBTTtRQUNMLEdBQUcsR0FBRyxTQUFTLENBQUM7S0FDakI7SUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFBLG1CQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVsRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7UUFDcEMsUUFBUSxFQUFFO1lBQ1IsMEJBQTBCLEVBQUUsSUFBQSxtQkFBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7WUFDNUQsaUJBQWlCLEVBQUUsSUFBQSxtQkFBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztTQUN6RDtRQUNELFVBQVUsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1FBQ3hDLFFBQVEsRUFBRSx3QkFBZ0I7UUFDMUIsbUJBQW1CLEVBQUU7WUFDbkIsUUFBUSxFQUFFO2dCQUNSLFdBQVcsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsUUFBUSxFQUFFO2dCQUNSLGVBQWUsRUFBRTtvQkFDZixHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2lCQUN2QjthQUNGO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQS9CRCw0QkErQkMifQ==