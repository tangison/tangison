import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: {
    default: "TANGISON | AI Systems Built to Keep African Operations Moving",
    template: "TANGISON | %s",
  },
  description:
    "Tangison Technologies designs resilient automation, analytics and digital platforms for organisations working with fragmented data, unreliable connectivity and complex field operations. Founded in Windhoek, Namibia by Tangi Iigonda.",
  metadataBase: new URL("https://tangison.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "TANGISON | AI Systems Built to Keep African Operations Moving",
    description: "Tangison Technologies designs resilient automation, analytics and digital platforms for organisations working with fragmented data, unreliable connectivity and complex field operations.",
    url: "https://tangison.com",
    siteName: "TANGISON",
    type: "website",
    locale: "en_NA",
    images: [
      {
        url: "/images/hero-namibia-dawn.webp",
        width: 1200,
        height: 630,
        alt: "Tangison Technologies: AI systems built to keep African operations moving",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TANGISON | AI Systems Built to Keep African Operations Moving",
    description: "Tangison Technologies designs resilient automation, analytics and digital platforms for organisations working with fragmented data, unreliable connectivity and complex field operations.",
    images: ["/images/hero-namibia-dawn.webp"],
  },
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
      <body
        className="font-satoshi antialiased bg-atlantic-black text-skeleton-bone min-h-screen flex flex-col"
        style={{ overflowX: "hidden", maxWidth: "100vw" }}
      >
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
