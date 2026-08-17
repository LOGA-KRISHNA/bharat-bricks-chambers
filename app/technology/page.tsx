import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Technology } from "@/components/sections/Technology";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Brick Manufacturing & Technology | Bharath Bricks and Chambers",
  description:
    "Discover the precision manufacturing processes and brick technology behind Bharath Bricks and Chambers.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        dark
        eyebrow="Project approach"
        title="Material knowledge meets construction clarity."
        text="A considered material process supports better architectural decisions from the first sample to the final installed surface."
      />
      <Technology />
      <Manufacturing />
      <CTA />
    </>
  );
}

