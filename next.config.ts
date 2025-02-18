import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/pirateKing-nextjs-resume" : "",
  output: "export",
  images: {
    unoptimized: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
