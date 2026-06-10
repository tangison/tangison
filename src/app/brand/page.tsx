import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tangison.com";

export const metadata: Metadata = {
  title: "Brand Guidelines | TANGISON",
  description:
    "TANGISON brand system for partners and designers. Logo, color palette, typography, and voice guidelines.",
  alternates: {
    canonical: "/brand",
  },
  openGraph: {
    url: `${baseUrl}/brand`,
  },
};

export { default } from "./page-client";
