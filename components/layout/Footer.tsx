import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteEmail, siteNav } from "@/lib/constants";

export function Footer() {
  return <footer className="bg-ink px-5 pb-7 pt-16 text-paper md:px-8 md:pt-24"><div className="mx-auto max-w-[1440px]">
    <div className="grid gap-12 border-b border-paper/20 pb-16 md:grid-cols-[1.2fr_.8fr_.8fr]">
      <div><p className="eyebrow text-paper/55">Bharat Bricks</p><h2 className="display mt-5 max-w-md text-4xl leading-none md:text-5xl">Material with a sense of place.</h2><a href={`mailto:${siteEmail}`} className="mt-8 inline-flex items-center gap-3 text-sm underline decoration-paper/30 underline-offset-8 hover:decoration-paper">{siteEmail}<ArrowUpRight size={16} /></a></div>
      <div><p className="eyebrow text-paper/55">Explore</p><div className="mt-5 grid gap-3">{siteNav.map((item) => <Link className="text-sm text-paper/80 hover:text-paper" href={item.href} key={item.href}>{item.label}</Link>)}</div></div>
      <div><p className="eyebrow text-paper/55">Project enquiries</p><p className="mt-5 max-w-xs text-sm leading-6 text-paper/70">Share your drawings, material intent and project timeline. We will help you start the conversation.</p><Link href="/contact" className="mt-6 inline-flex text-sm underline underline-offset-8">Start an enquiry</Link></div>
    </div>
    <div className="flex flex-col gap-3 pt-6 text-[10px] font-semibold tracking-[.12em] uppercase text-paper/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Bharat Bricks</span><span>Architectural masonry materials</span></div>
  </div></footer>;
}
