import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployments
  output: 'standalone',
  
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
      ],
    },
  ],
  
  // Turbopack configuration for dev mode
  experimental: {
    turbo: {
      // Turbo handles module warnings internally
      // No need for webpack ignoreWarnings
    },
  },
  
  // Only include webpack config for production builds (no --turbo flag)
  ...(process.argv.includes('--turbo') ? {} : {
    webpack: (config, { isServer }) => {
      config.ignoreWarnings = [
        { module: /node_modules\/punycode/ },
        { message: /Critical dependency: the request of a dependency is an expression/ },
        { module: /node_modules\/@supabase\/realtime-js/ }
      ];
      return config;
    },
  }),
};

export default nextConfig;