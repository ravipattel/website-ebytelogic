import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',
  },
}

if (process.env.NODE_ENV === 'development') {
  (async () => {
    await setupDevPlatform();
  })();
}

module.exports = nextConfig
