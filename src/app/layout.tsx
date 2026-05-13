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
  },
  twitter: {
    card: "summary_large_image",
    title: "TANGISON — Sovereign Intelligence Infrastructure",
    description: "Intelligence built on what remains.",
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
      <body className="font-satoshi antialiased bg-atlantic-black text-skeleton-bone overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
