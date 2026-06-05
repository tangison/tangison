import type { Metadata } from "next";
import { FeormPage } from "./page-client";

export const metadata: Metadata = {
  title: "Feorm — Agrotourism & Equipment Rental | TANGISON",
  description:
    "Namibian agrotourism and equipment rental marketplace by TANGISON. Book farm stays, rent machinery, and connect with Namibian agriculture. Built with Tuppaman Investment.",
  alternates: {
    canonical: "/products/feorm",
  },
};

export default function Page() {
  return <FeormPage />;
}
