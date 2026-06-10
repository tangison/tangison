import type { Metadata } from "next";
import { StudioPage } from "./page-client";

export const metadata: Metadata = {
  title: "Tangison Technologies",
  description:
    "One company. An applied AI laboratory and a creative studio, both built in Windhoek, Namibia.",
  alternates: {
    canonical: "/studio",
  },
};

export default function Page() {
  return <StudioPage />;
}
