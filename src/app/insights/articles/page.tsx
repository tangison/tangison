import type { Metadata } from "next";
import { ArticlesPage } from "./page-client";

export const metadata: Metadata = {
  title: "Articles | TANGISON",
  description:
    "Perspectives and educational content on applied AI and building in Africa.",
};

export default function Page() {
  return <ArticlesPage />;
}
