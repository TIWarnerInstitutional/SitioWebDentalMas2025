/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "your-cdn.com", "goo.gl"],
  },
};
module.exports = nextConfig;
