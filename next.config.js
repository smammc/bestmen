/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/bestmen" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/bestmen/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
