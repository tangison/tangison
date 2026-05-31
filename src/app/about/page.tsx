import type { Metadata } from "next";
import { AboutPage } from "./page-client";

export const metadata: Metadata = {
  title: "About — TANGISON",
  description:
    "TANGISON is a premium Namibian applied AI laboratory and engineering company. We research, build, deploy, and commercialize intelligent systems for organizations across Africa.",
};

export default function Page() {
  return <AboutPage />;
}
