"use client";

import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export function MagneticButton({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  function move(event: React.MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * 0.13}px, ${(event.clientY - box.top - box.height / 2) * 0.13}px)`;
  }
  return <Link ref={ref} href={href} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = "translate(0, 0)"; }} className="group inline-flex items-center gap-3 rounded-full border border-ink/30 px-5 py-3 text-xs font-semibold tracking-[.12em] uppercase transition-transform duration-200 hover:border-ink"><span>{children}</span><ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></Link>;
}
