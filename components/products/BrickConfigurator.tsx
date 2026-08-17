"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";

const tones = ["Terracotta", "Earth", "Deep red"];
export function BrickConfigurator({ accent }: { accent: string }) {
  const [tone, setTone] = useState(0);
  const colors = [accent, "#97654d", "#703325"];
  return <div className="border border-ink/15 bg-paper-deep p-5"><div className="flex items-center justify-between"><p className="eyebrow">Material direction</p><RotateCw size={17} /></div><div className="mt-5 grid grid-cols-3 gap-2">{tones.map((item, index) => <button type="button" onClick={() => setTone(index)} className={`border p-3 text-left text-xs transition-colors ${tone === index ? "border-ink bg-paper" : "border-ink/10 bg-transparent"}`} key={item}><span style={{ backgroundColor: colors[index] }} className="mb-3 block h-5 w-full" />{item}</button>)}</div><p className="mt-5 text-xs leading-5 text-muted">Illustrative only. Request physical samples and verified information before selecting a finish.</p></div>;
}
