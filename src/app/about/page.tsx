import type { Metadata } from "next";
import { AboutPage } from "./about-page-client";

export const metadata: Metadata = {
  title: "About",
  description: "Tangison Technologies: applied AI built in Namibia for conditions that break generic infrastructure.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "TANGISON | About",
    description: "Applied AI built in Namibia for conditions that break generic infrastructure.",
    url: "https://tangison.com/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
