/**
 * ESLint Configuration
 * 
 * Configuration for the ESLint code linting tool.
 * Includes:
 * - TypeScript and React specific rules
 * - Browser environment globals
 * - React Hooks and Refresh plugins
 * - Custom rule overrides
 */

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Ignore build output directory
  { ignores: ["dist"] },
  {
    // Extend recommended configurations
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // Configure React-specific plugins
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    // Define custom rules and overrides
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
