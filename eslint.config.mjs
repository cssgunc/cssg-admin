import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  globalIgnores(["**/node_modules/**", "apps/frontend/**", "**/dist/**", "**/.next/**"]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
]);
