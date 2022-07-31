module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "@typescript-eslint/no-unused-vars":
      process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-param-reassign": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: [
          "function-declaration",
          "function-expression",
          "arrow-function",
        ],
        unnamedComponents: ["function-expression", "arrow-function"],
      },
    ],
    "import/no-cycle": "off",
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "react/no-unescaped-entities": ["off"],
  },
};
