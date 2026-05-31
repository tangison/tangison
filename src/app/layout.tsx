import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TANGISON — Applied AI Laboratory",
    template: "%s — TANGISON",
  },
  description:
    "TANGISON is a Namibian applied AI laboratory that researches, builds, and deploys intelligent systems, products, and infrastructure for organizations across Africa.",
  keywords: [
    "Tangison",
    "applied AI",
    "AI laboratory",
    "AI infrastructure",
    "Africa",
    "Namibia",
    "Windhoek",
    "AI consulting",
    "AI products",
    "SkillsCamp",
  ],
  authors: [{ name: "Tangison" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "TANGISON — Applied AI Laboratory",
    description: "Applied AI. Built in Africa. Research, build, deploy, commercialize.",
    url: "https://tangison.com",
    siteName: "Tangison",
    type: "website",
    images: [
      {
        url: "/images/logo-mark.png",
        width: 1200,
        height: 630,
        alt: "TANGISON — Applied AI Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TANGISON — Applied AI Laboratory",
    description: "Applied AI. Built in Africa.",
    images: ["/images/logo-mark.png"],
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
      <body className="font-satoshi antialiased bg-warm-white text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
