import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { BrickConfigurator } from "@/components/products/BrickConfigurator";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductPreview } from "@/components/products/ProductPreview";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { getProduct, products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: `${product.summary} Explore applications and request verified technical information from Bharat Bricks.` };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  const related = products.filter((item) => product.related.includes(item.slug));
  return <><section className="pt-20"><div className="grid min-h-[620px] lg:grid-cols-2"><div className="order-2 flex flex-col justify-between bg-paper px-5 py-12 md:px-8 lg:order-1 lg:py-18"><div><Link href="/products" className="eyebrow text-brick">← All products</Link><p className="eyebrow mt-14 text-muted">{product.category}</p><h1 className="display mt-5 max-w-xl text-5xl leading-[.9] md:text-7xl">{product.name}</h1><p className="mt-7 max-w-md text-sm leading-7 text-muted md:text-base">{product.description}</p></div><div className="mt-10"><Button href="/contact">Request a quote</Button></div></div><div className="order-1 relative min-h-[410px] bg-paper-deep lg:order-2"><ProductPreview accent={product.accent} /><div className="absolute left-5 top-5 rounded-full border border-ink/15 bg-paper/80 px-3 py-2 text-[10px] font-semibold tracking-[.12em] uppercase backdrop-blur">Interactive material preview</div></div></div></section>
    <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow text-brick">Product details</p><h2 className="display mt-5 text-4xl leading-none md:text-5xl">Made for material-led decisions.</h2><p className="mt-6 text-sm leading-7 text-muted">Product availability, tested performance and installation suitability must be confirmed against current project documentation.</p></div><div className="grid gap-10"><div className="grid gap-7 sm:grid-cols-2"><div><h3 className="eyebrow">Applications</h3><ul className="mt-5 grid gap-3">{product.applications.map((application) => <li className="flex items-center gap-3 text-sm" key={application}><Check size={16} className="text-brick" />{application}</li>)}</ul></div><div><h3 className="eyebrow">Available variants</h3><ul className="mt-5 grid gap-3">{product.variants.map((variant) => <li className="flex items-start gap-3 text-sm" key={variant}><Check size={16} className="mt-0.5 shrink-0 text-brick" />{variant}</li>)}</ul></div></div><BrickConfigurator accent={product.accent} /></div></div></section>
    <section className="bg-ink px-5 py-20 text-paper md:px-8 md:py-28"><div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow text-[#d9b17a]">Technical information</p><h2 className="display mt-5 text-4xl leading-none md:text-5xl">Verified data belongs in the specification.</h2></div><div className="border-t border-paper/20">{product.technicalSpecifications.map((spec) => <div className="grid gap-3 border-b border-paper/20 py-5 sm:grid-cols-2" key={spec.label}><dt className="text-sm text-paper/65">{spec.label}</dt><dd className="text-sm">{spec.value}</dd></div>)}</div></div></section>
    <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1280px]"><div className="flex items-end justify-between"><div><p className="eyebrow text-brick">Material gallery</p><h2 className="display mt-4 text-4xl md:text-5xl">Surface, rhythm, shadow.</h2></div><span className="hidden text-xs text-muted sm:block">Illustrative material studies</span></div><div className="mt-10 grid gap-3 sm:grid-cols-3">{[0, 1, 2].map((index) => <div className={`relative min-h-70 overflow-hidden bg-paper-deep ${index === 1 ? "sm:-translate-y-8" : ""}`} key={index}><Image src="/images/architectural-facade.svg" alt={`${product.name} architectural material study ${index + 1}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" style={{ filter: `hue-rotate(${index * 13}deg) saturate(${0.82 + index * .1})`, objectPosition: `${35 + index * 20}% center` }} /></div>)}</div></div></section>
    {related.length > 0 && <section className="border-t border-ink/15 px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1280px]"><div className="mb-8 flex items-center justify-between"><h2 className="display text-4xl">Related materials</h2><Link href="/products" className="inline-flex items-center gap-2 text-sm underline underline-offset-8">All products <ArrowUpRight size={15} /></Link></div>{related.map((item, index) => <ProductCard key={item.slug} product={item} index={index} />)}</div></section>}
    <CTA /></>;
}
