import type { Metadata } from "next";
import { HomePage } from "./page-client";

export const metadata: Metadata = {
  title: "TANGISON — Applied AI Laboratory",
  description:
    "TANGISON is a Namibian applied AI laboratory that researches, builds, and deploys intelligent systems, products, and infrastructure for organizations across Africa.",
};

export default function Page() {
  return <HomePage />;
}
