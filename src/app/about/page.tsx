import type { Metadata } from "next";
import { AboutPage } from "./page-client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tangison.com";

export const metadata: Metadata = {
  title: "About — Applied AI Lab in Namibia",
  description:
    "Applied AI laboratory in Windhoek, Namibia. We research, build, and deploy intelligent systems for African business conditions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: `${baseUrl}/about`,
  },
};

export default function Page() {
  return <AboutPage />;
}
