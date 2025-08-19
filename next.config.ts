import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // enable static export
  // other config options can go here
    images: {
    unoptimized: true,       // disable default image optimization
  },
};

export default nextConfig;
