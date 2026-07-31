import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images are local (public/), no remotePatterns needed
  images: {
    // SVGs cannot be optimized by sharp — skip them
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
