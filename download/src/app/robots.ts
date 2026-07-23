import type { MetadataRoute } from "next";

/**
 * Disallow all crawling — this is a locked coming-soon gateway.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
