import type { Metadata } from "next";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { PageIntro } from "@/components/sections/PageIntro";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Machine-Made Wire-Cut Bricks | Bharath Bricks and Chambers",
  description:
    "Bharath Bricks and Chambers manufactures high-precision machine-made wire-cut red clay bricks. Fully equipped modern chamber delivering premium strength, perfect finish, and competitive pricing.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Product Line"
        title="High-Precision Machine-Made Wire-Cut Bricks."
        text="Our chamber is fully equipped with modern, high-precision machinery, ensuring consistent quality in every wire-cut red clay brick we produce. We offer premium strength, perfect finish, and competitive pricing to meet both small and large project requirements."
      />
      <ProductShowcase />
      <CTA />
    </>
  );
}


