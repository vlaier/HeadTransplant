/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["serwer2252942.home.pl", "localhost"],
  },
};

module.exports = nextConfig;
