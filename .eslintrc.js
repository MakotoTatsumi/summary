module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "./configs/eslint/import",
    "./configs/eslint/react",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-argument": 0,
  },
  ignorePatterns: [".next", "**/libs/**"],
}
