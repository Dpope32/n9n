import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  
  // Turbopack configuration
  experimental: {
    turbo: {
      // Turbopack handles module warnings differently
      // The punycode warning is harmless and handled internally
    },
  },
  
  // Keep webpack config only for non-turbo builds (production)
  webpack: (config, { isServer }) => {
    // Only apply webpack config when NOT using turbo
    if (process.env.TURBOPACK !== '1') {
      config.ignoreWarnings = [
        { module: /node_modules\/punycode/ }
      ];
    }
    return config;
  },
};

export default nextConfig;