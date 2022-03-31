const { OFF, ERROR } = require("./const")

module.exports = {
  rules: {
    "import/no-unresolved": "error",
    "import/prefer-default-export": OFF,
    "import/extensions": [
      ERROR,
      {
        js: "never",
        ts: "never",
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "type", ["internal", "sibling", "index", "object", "parent"]],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
  },
}
