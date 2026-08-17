"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteNav } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overHero = pathname === "/" && !scrolled && !open;
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${overHero ? "bg-gradient-to-b from-ink/45 to-transparent text-paper" : "border-b border-ink/10 bg-paper/95 backdrop-blur-lg"}`}>
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-8">
      <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <Image
          src="/bbc-logo.png"
          alt="Bharath Bricks and Chambers Logo"
          width={40}
          height={40}
          className="h-10 w-auto object-contain drop-shadow-sm"
          priority
        />
        <span className="text-xs font-bold tracking-[.18em] uppercase leading-tight">Bharath Bricks<br />and Chambers</span>

      </Link>
      <nav className="hidden items-center gap-6 lg:flex">{siteNav.map((item) => <Link className="text-[11px] font-semibold tracking-[.12em] uppercase opacity-80 transition-opacity hover:opacity-100" href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/contact" className="rounded-full border border-current/35 px-4 py-2 text-[11px] font-semibold tracking-[.12em] uppercase">Get in touch</Link></nav>
      <button className="grid h-10 w-10 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-ink/10 bg-paper px-5 py-5 text-ink lg:hidden">{[...siteNav, { href: "/contact", label: "Get in touch" }].map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 text-lg font-medium">{item.label}</Link>)}</nav>}
  </header>;
}

