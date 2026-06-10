import type { Metadata } from "next";
import { ProductsPage } from "./page-client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tangison.com";

export const metadata: Metadata = {
  title: "Products | TANGISON",
  description:
    "Self-hosted AI products by TANGISON. SkillsCamp offers 531+ agent skills. Tangison Agent runs autonomous operations. Zero cloud dependency. Built for Africa.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    url: `${baseUrl}/products`,
  },
};

export default function Page() {
  return <ProductsPage />;
}
