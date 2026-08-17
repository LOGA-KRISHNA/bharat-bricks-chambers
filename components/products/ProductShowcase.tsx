import Image from "next/image";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductShowcase({ limit }: { limit?: number }) {
  const shown = limit ? products.slice(0, limit) : products;
  return <section className="overflow-hidden px-5 py-20 md:px-8 md:py-32"><div className="mx-auto max-w-[1280px]">
    <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionHeading eyebrow="Materials" title="A palette for architecture." text="Explore masonry and cladding categories; final product selection should always be confirmed against project requirements." /><div className="relative mt-9 aspect-[1.25/1] overflow-hidden bg-brick"><Image src="/images/architectural-facade.svg" alt="Abstract illustration of an architectural brick facade" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover mix-blend-multiply opacity-85" /></div></div><div className="self-end">{shown.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div></div>
  </div></section>;
}
