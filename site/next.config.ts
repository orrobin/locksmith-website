import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical URLs use trailing slashes site-wide (docs/03 §1)
  trailingSlash: true,
};

export default nextConfig;
