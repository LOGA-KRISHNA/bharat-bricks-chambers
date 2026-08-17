import type { Metadata } from "next";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { PageIntro } from "@/components/sections/PageIntro";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Bricks & Building Materials | Bharath Bricks and Chambers",
  description:
    "Explore Bharath Bricks and Chambers machine-made bricks, wire-cut bricks, exposed bricks, brick tiles and facade tiles.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Product categories"
        title="Masonry, refined for the architectural brief."
        text="Explore categories below, then request current samples and verified technical information from Bharath Bricks and Chambers for your intended application."
      />
      <ProductShowcase />
      <CTA />
    </>
  );
}

