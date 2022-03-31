const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.{js,jsx,ts,tsx}"],
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, "../src")]

    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()]

    return config
  },
}
