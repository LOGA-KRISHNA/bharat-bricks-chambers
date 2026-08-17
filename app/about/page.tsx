import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { PageIntro } from "@/components/sections/PageIntro";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Bharath Bricks and Chambers",
  description:
    "Learn about Bharath Bricks and Chambers and our material-led approach to architectural masonry in Tiruttani and Thiruvallur.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Bharath Bricks and Chambers"
        title="Architecture begins with what you can touch."
        text="Bharath Bricks and Chambers brings a material-first perspective to masonry, cladding and architectural brick surfaces."
      />
      <About />
      <Manufacturing />
      <CTA />
    </>
  );
}

