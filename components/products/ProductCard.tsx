import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return <Link href={`/products/${product.slug}`} className="group block border-t border-ink/15 py-5 last:border-b">
    <div className="grid items-center gap-5 md:grid-cols-[70px_1.15fr_1fr_auto]"><span className="text-xs text-muted">0{index + 1}</span><div><p className="eyebrow text-brick">{product.category}</p><h3 className="display mt-2 text-3xl md:text-4xl">{product.name}</h3></div><p className="max-w-sm text-sm leading-6 text-muted">{product.summary}</p><span className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 transition-all group-hover:bg-ink group-hover:text-paper"><ArrowUpRight size={18} /></span></div>
  </Link>;
}
