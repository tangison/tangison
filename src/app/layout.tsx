import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TANGISON — Sovereign Intelligence Infrastructure",
    template: "%s — TANGISON",
  },
  description:
    "Strategic systems, AI-native infrastructure, digital sovereignty tools, and resilient operational platforms for African enterprise and institutions.",
  keywords: [
    "Tangison",
    "sovereign infrastructure",
    "AI",
    "Africa",
    "strategic intelligence",
    "digital sovereignty",
    "Namibia",
    "Skeleton Coast",
  ],
  authors: [{ name: "Tangison Systems" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "TANGISON — Sovereign Intelligence Infrastructure",
    description: "Intelligence built on what remains.",
    url: "https://tangison.com",
    siteName: "Tangison",
    type: "website",
    images: [
      {
        url: "/images/hero-shipwreck.png",
        width: 1200,
        height: 630,
        alt: "TANGISON — Sovereign Intelligence Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TANGISON — Sovereign Intelligence Infrastructure",
    description: "Intelligence built on what remains.",
    images: ["/images/hero-shipwreck.png"],
  },
  metadataBase: new URL("https://tangison.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-satoshi antialiased bg-atlantic-black text-skeleton-bone overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
