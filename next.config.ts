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
  async redirects() {
    return [
      {
        source: "/architecture",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/systems",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/intelligence",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/manifesto",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
