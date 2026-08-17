import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { PageIntro } from "@/components/sections/PageIntro";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Projects & Gallery | Bharath Bricks and Chambers",
  description:
    "Browse architectural project photography, material studies and brick surface applications by Bharath Bricks and Chambers.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        dark
        eyebrow="Visual journal"
        title="A study in light, depth and clay."
        text="An evolving visual journal of material expressions, facade compositions and close-range detail."
      />
      <Gallery />
      <CTA />
    </>
  );
}

