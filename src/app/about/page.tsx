import type { Metadata } from "next";
import { AboutPage } from "./page-client";

export const metadata: Metadata = {
  title: "About: TANGISON",
  description:
    "About TANGISON: a premium Namibian applied AI laboratory that researches, builds, and deploys custom AI systems, self-hosted infrastructure, and products built for African business conditions.",
};

export default function Page() {
  return <AboutPage />;
}
