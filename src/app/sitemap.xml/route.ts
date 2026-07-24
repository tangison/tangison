import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://tangison.com";

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}</loc><priority>1.0</priority></url>
  <url><loc>${baseUrl}/solutions</loc><priority>0.9</priority></url>
  <url><loc>${baseUrl}/industries</loc><priority>0.8</priority></url>
  <url><loc>${baseUrl}/work</loc><priority>0.7</priority></url>
  <url><loc>${baseUrl}/company</loc><priority>0.8</priority></url>
  <url><loc>${baseUrl}/brand</loc><priority>0.5</priority></url>
  <url><loc>${baseUrl}/contact</loc><priority>0.7</priority></url>
  <url><loc>${baseUrl}/privacy</loc><priority>0.3</priority></url>
  <url><loc>${baseUrl}/terms</loc><priority>0.3</priority></url>
  <url><loc>${baseUrl}/sitemap</loc><priority>0.2</priority></url>
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
