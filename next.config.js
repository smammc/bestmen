/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/godfather-bestmen" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/godfather-bestmen/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
