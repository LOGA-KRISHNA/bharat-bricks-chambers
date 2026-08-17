"use client";

import { motion } from "framer-motion";

export function ProductPreview({ accent }: { accent: string }) {
  return (
    <div className="relative h-full min-h-96 w-full overflow-hidden rounded-2xl bg-[#1e1916] p-8 flex flex-col justify-between border border-paper/15">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-sm rounded-xl p-6 shadow-2xl overflow-hidden border border-white/10"
          style={{ backgroundColor: accent }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 mix-blend-overlay" />
          <div className="space-y-2">
            {[0, 1, 2, 3].map((row) => (
              <div
                key={row}
                className="flex gap-2"
                style={{ transform: row % 2 ? "translateX(-16px)" : "none" }}
              >
                {[0, 1, 2, 3, 4].map((col) => (
                  <div
                    key={col}
                    className="h-10 w-24 rounded-[3px] bg-black/25 border border-white/10 shadow-inner flex-shrink-0"
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 text-center">
        <p className="eyebrow text-paper/60">Architectural Finish</p>
        <p className="mt-1 text-xs text-paper/80 font-mono uppercase tracking-widest">{accent}</p>
      </div>
    </div>
  );
}

