import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { Technology } from "@/components/sections/Technology";
import { Applications } from "@/components/sections/Applications";
import { Sustainability } from "@/components/sections/Sustainability";
import { Gallery } from "@/components/sections/Gallery";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { ProductShowcase } from "@/components/products/ProductShowcase";

export const metadata: Metadata = {
  title: "Bharath Bricks and Chambers | Bricks & Architectural Materials",
  description:
    "Explore Bharath Bricks and Chambers for quality bricks and architectural building materials for modern construction and architectural applications.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <ProductShowcase limit={4} />
      <Manufacturing />
      <Technology />
      <Applications />
      <Sustainability />
      <Gallery preview />
      <CTA />
    </>
  );
}

