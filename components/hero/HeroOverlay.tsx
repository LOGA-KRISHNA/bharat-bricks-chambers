"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroOverlay({ phase }: { phase: number }) {
  const reduceMotion = useReducedMotion();
  const stage =
    phase < 0.18
      ? "Material in motion"
      : phase < 0.45
      ? "The first courses"
      : phase < 0.65
      ? "A wall takes shape"
      : phase < 0.85
      ? "Architectural focus"
      : "Bharath Bricks & Chambers";
  return <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between px-5 pb-7 pt-28 text-paper md:px-8 md:pb-10 md:pt-32">
    <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
      <p className="eyebrow text-paper/70">Bharat Bricks / Architectural materials</p>
      <h1 className="display mt-5 text-5xl leading-[.88] sm:text-7xl md:text-[clamp(5rem,9.5vw,9.7rem)]">Built brick<br /><em className="font-normal text-[#d9b17a]">by brick.</em></h1>
      <p className="mt-6 max-w-md text-sm leading-6 text-paper/78 md:text-base">Masonry materials for architecture with depth, permanence and a distinct sense of place.</p>
      <div className="pointer-events-auto mt-7"><Button href="/products" variant="light">Explore materials</Button></div>
    </motion.div>
    <div className="flex items-end justify-between border-t border-paper/25 pt-4"><div><p className="eyebrow text-paper/55">Scroll to construct</p><p className="mt-1 text-sm">{stage}</p></div><ArrowDown size={22} className={reduceMotion ? "" : "animate-bounce"} /></div>
  </div>;
}

