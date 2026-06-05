import type { Metadata } from "next";
import { FeormPage } from "./page-client";

export const metadata: Metadata = {
  title: "Feorm — Namibian Agrotourism & Equipment Rental | TANGISON",
  description:
    "Namibian agrotourism and equipment rental marketplace. Book farm stays. Rent machinery. With Tuppaman Investment.",
};

export default function Page() {
  return <FeormPage />;
}
