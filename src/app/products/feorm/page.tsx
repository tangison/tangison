import type { Metadata } from "next";
import { FeormPage } from "./page-client";

export const metadata: Metadata = {
  title: "Feorm — TANGISON",
  description:
    "Namibian agrotourism and equipment rental marketplace. A TANGISON product in collaboration with Tuppaman Investment.",
};

export default function Page() {
  return <FeormPage />;
}
