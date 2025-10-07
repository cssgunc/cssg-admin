import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const config = [
    // Global ignores (equivalent to .eslintignore)
    {
        ignores: ["node_modules/**", ".next/**", "out/**"],
    },

    // Apply ESLint rules to JS/TS/JSX/TSX files
    ...compat
        .extends("next/core-web-vitals", "next/typescript")
        .map((config) => ({
            ...config,
            files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
        })),
];

export default config;
