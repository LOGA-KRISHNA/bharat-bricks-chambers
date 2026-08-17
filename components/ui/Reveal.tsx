"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealTransition } from "@/lib/animations";

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...revealTransition, delay }}>{children}</motion.div>;
}
