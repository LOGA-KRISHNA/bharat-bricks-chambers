import type { Metadata } from "next";
import { Applications } from "@/components/sections/Applications";
import { PageIntro } from "@/components/sections/PageIntro";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Brick Applications | Bharath Bricks and Chambers",
  description:
    "Explore architectural brick applications for residential, commercial, hospitality and civic construction projects.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Applications"
        title="A material language for every scale of place."
        text="From homes to hospitality, public environments to workplaces, brick offers a grounded and tactile architectural expression."
      />
      <Applications />
      <CTA />
    </>
  );
}

