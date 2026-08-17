import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { PageIntro } from "@/components/sections/PageIntro";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = { title: "Gallery", description: "Explore Bharat Bricks visual material and facade studies." };
export default function GalleryPage() { return <><PageIntro dark eyebrow="Visual journal" title="A study in light, depth and clay." text="An evolving visual journal of material expressions, facade compositions and close-range detail." /><Gallery /><CTA /></>; }
