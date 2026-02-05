import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',
  },
     images: {
       remotePatterns: [
      {
        protocol: "https",
        hostname: "yrfhnyzvhawfczflmcfr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
}


if (process.env.NODE_ENV === 'development') {
  (async () => {
    await setupDevPlatform();
  })();
}

module.exports = nextConfig
