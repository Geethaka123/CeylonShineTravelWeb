/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    runtime: 'nodejs',
  },
};

module.exports = nextConfig;
