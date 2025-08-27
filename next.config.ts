// next.config.js
const nextConfig = {
  output: 'standalone', // required for edge/runtime deployment
  reactStrictMode: true,
  experimental: {
    runtime: 'edge', // enables edge runtime
  },
}

module.exports = nextConfig
