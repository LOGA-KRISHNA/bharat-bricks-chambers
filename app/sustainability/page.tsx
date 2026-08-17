import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Sustainability } from "@/components/sections/Sustainability";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = { title: "Material Responsibility", description: "Bharat Bricks' material responsibility principles for informed architectural decisions." };
export default function SustainabilityPage() { return <><PageIntro eyebrow="Material responsibility" title="Choose with care. Build for the long view." text="Good material decisions are evidence-led, context-aware and made in partnership with the project team." /><Sustainability /><CTA /></>; }
