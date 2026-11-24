import js from "@eslint/js";
import importNext from "eslint-plugin-import-next";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      prettier,
      "import-next": importNext,
      "unused-imports": unusedImports,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          printWidth: 130,
          tabWidth: 2,
          endOfLine: "auto",
        },
      ],
      "import-next/no-empty-named-blocks": "error",
      "import-next/newline-after-import": "error",
      "unused-imports/no-unused-imports": "error",
    },
  },
]);
