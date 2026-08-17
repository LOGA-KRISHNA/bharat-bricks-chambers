import Image from "next/image";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductShowcase({ limit }: { limit?: number }) {
  const shown = limit ? products.slice(0, limit) : products;
  return <section className="overflow-hidden px-5 py-20 md:px-8 md:py-32"><div className="mx-auto max-w-[1280px]">
    <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionHeading eyebrow="Machine-Made Production" title="Engineered Red Clay Bricks." text="Our chamber is fully equipped with modern, high-precision machinery, ensuring consistent quality in every wire-cut red clay brick we produce." /><div className="relative mt-9 aspect-[1.25/1] overflow-hidden bg-brick"><Image src="/images/architectural-facade.svg" alt="Bharath Bricks and Chambers machine-made red clay brick wall" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover mix-blend-multiply opacity-85" /></div></div><div className="self-end">{shown.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div></div>

  </div></section>;
}
