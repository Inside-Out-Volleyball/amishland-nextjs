import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mum8dcbdl3prlupf.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
