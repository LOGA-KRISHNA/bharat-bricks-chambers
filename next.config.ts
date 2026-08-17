import type { NextConfig } from "next";

const isVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = {
  // On Vercel, omit standalone output to avoid ENOENT next-server.js.nft.json errors
  ...(isVercel ? {} : { output: "standalone" }),
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },
};

export default nextConfig;

