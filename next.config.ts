import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/pirateKing-nextjs-resume" : "",
  output: "export",
  images: {
    unoptimized: false,
  },
  reactStrictMode: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
