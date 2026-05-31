import type { Metadata } from "next";
import { AboutPage } from "./page-client";

export const metadata: Metadata = {
  title: "About | TANGISON",
  description:
    "We are an applied AI laboratory in Windhoek, Namibia. We research, build, and deploy AI systems and products designed for African business conditions.",
};

export default function Page() {
  return <AboutPage />;
}
