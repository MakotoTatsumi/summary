const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "api.ts"],
  env: {
    API_KEY: process.env.API_KEY,
  },
  assetPrefix: urlPrefix,
  trailingSlash: true,
}

module.exports = nextConfig
