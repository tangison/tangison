import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: [
    ".space-z.ai",
    "preview-chat-88af9309-14b5-435f-89ee-6a47c486aa49.space-z.ai",
  ],
};

export default nextConfig;
