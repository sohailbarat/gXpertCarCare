/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Allow Vercel to handle image optimization
  },
  eslint: {
    ignoreDuringBuilds: true, // Optional: skips ESLint checks on build
  },
  typescript: {
    ignoreBuildErrors: true, // Optional: skips TypeScript checks on build
  },
};

module.exports = nextConfig;
