import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: { presets: ["@babel/preset-react"] },
      },
      sourceType: "module",
      globals: {
        window: true,
        document: true,
        test: true,
        expect: true,
        jest: true,
      },
    },
    plugins: { react: reactPlugin },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
