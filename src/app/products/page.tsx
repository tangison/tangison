import type { Metadata } from "next";
import { ProductsPage } from "./page-client";

export const metadata: Metadata = {
  title: "Products — TANGISON",
  description:
    "Sovereign AI products built by TANGISON. From SkillsCamp's 531+ modular agent skills to the Tangison Agent platform — zero cloud dependency, built for African contexts.",
};

export default function Page() {
  return <ProductsPage />;
}
