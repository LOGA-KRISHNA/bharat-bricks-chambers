import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { PageIntro } from "@/components/sections/PageIntro";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = { title: "About", description: "Learn about Bharat Bricks and our material-led approach to architectural masonry." };
export default function AboutPage() { return <><PageIntro eyebrow="About Bharat Bricks" title="Architecture begins with what you can touch." text="Bharat Bricks brings a material-first perspective to masonry, cladding and architectural brick surfaces." /><About /><Manufacturing /><CTA /></>; }
