/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  testMatch: ["**/*.test.js", "**/*.test.ts", "**/*.test.tsx"],
  setupFilesAfterEnv: ["<rootDir>/configs/test/setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transformIgnorePatterns: ["/node_modules/"],

  transform: {
    ".+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
}

module.exports = config
