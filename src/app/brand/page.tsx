import type { Metadata } from "next";
import { BrandPage } from "./brand-page-client";

export const metadata: Metadata = {
  title: "Brand",
  description: "The Tangison brand system: typography, colour, spacing, motion, voice.",
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "TANGISON | Brand",
    description: "The Tangison brand system: typography, colour, spacing, motion, voice.",
    url: "https://tangison.com/brand",
  },
};

export default function Page() {
  return <BrandPage />;
}
