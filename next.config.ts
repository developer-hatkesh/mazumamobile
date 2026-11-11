import type { NextConfig } from "next";

const isStaticExport = process.env.VERCEL_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
