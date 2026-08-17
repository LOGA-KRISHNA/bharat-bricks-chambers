"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroOverlay } from "./HeroOverlay";
import { WebGLFallback } from "@/components/three/WebGLFallback";

const BrickWallScene = dynamic(() => import("@/components/three/BrickWallScene"), { ssr: false, loading: () => <WebGLFallback /> });

function canUseWebGL() {
  try { const canvas = document.createElement("canvas"); return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))); } catch { return false; }
}

export function Hero() {
  const [webgl, setWebgl] = useState(false);
  const [checked, setChecked] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setReducedMotion(motion.matches); setWebgl(!motion.matches && canUseWebGL()); setChecked(true); };
    update(); motion.addEventListener("change", update); return () => motion.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const trigger = ScrollTrigger.create({ trigger: "#construction-hero", start: "top top", end: "bottom bottom", onUpdate: (self) => setPhase(self.progress) });
    return () => trigger.kill();
  }, [reducedMotion]);
  const displayPhase = reducedMotion ? 1 : phase;
  return <section id="construction-hero" className="relative h-[250svh] bg-[#25201c]"><div className="sticky top-0 h-[100svh] overflow-hidden"><WebGLFallback />{checked && webgl && <div className="absolute inset-0"><BrickWallScene reducedMotion={reducedMotion} /></div>}<HeroOverlay phase={displayPhase} /><div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-paper/15"><span className="block h-full bg-[#d9b17a] transition-[width] duration-100" style={{ width: `${Math.max(2, displayPhase * 100)}%` }} /></div></div></section>;
}
