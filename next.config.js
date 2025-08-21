/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // Let Vercel optimize images
  },
};

module.exports = nextConfig;
