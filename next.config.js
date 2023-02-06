/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost, serwer2252942.home.pl/autoinstalator/wordpress"],
  },
};

module.exports = nextConfig;
