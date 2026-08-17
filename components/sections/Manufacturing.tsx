import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Manufacturing() {
  return <section className="px-5 py-20 md:px-8 md:py-32"><div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.05fr_.95fr]"><div className="relative min-h-[390px] overflow-hidden bg-[#b55e3e]"><Image src="/images/architectural-facade.svg" alt="Abstract brick facade pattern" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div><div className="flex flex-col justify-between border-t border-ink/15 pt-5 lg:border-l lg:border-t-0 lg:pl-10"><div><p className="eyebrow text-brick">How we work</p><h2 className="display mt-5 max-w-lg text-4xl leading-[.98] md:text-6xl">From raw material to a composed surface.</h2><p className="mt-7 max-w-md text-sm leading-7 text-muted">The best masonry begins with material attention, then follows through sampling, detailing and an honest understanding of the intended application.</p></div><Link href="/technology" className="mt-10 inline-flex items-center gap-3 text-sm font-medium">See our approach <ArrowUpRight size={18} /></Link></div></div></section>;
}
