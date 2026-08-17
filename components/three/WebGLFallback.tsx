export function WebGLFallback({ compact = false, accent = "#a94a2e" }: { compact?: boolean; accent?: string }) {
  const bricks = Array.from({ length: compact ? 18 : 48 });
  return <div aria-label="Architectural brick facade illustration" className="relative h-full w-full overflow-hidden bg-[#26201c]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_24%,rgba(255,226,177,.25),transparent_32%),linear-gradient(145deg,#38312a,#171310)]" />
    <div className="absolute bottom-[12%] left-1/2 grid w-[90%] -translate-x-1/2 grid-cols-6 gap-[3px] opacity-90 sm:w-[72%] md:grid-cols-8">
      {bricks.map((_, index) => <span key={index} style={{ backgroundColor: accent, opacity: 0.68 + ((index * 17) % 20) / 100, transform: `translateX(${index % 8 === 0 ? "11px" : "0"})` }} className={`aspect-[1.85/1] border border-black/20 shadow-[inset_0_1px_rgba(255,255,255,.12)] ${index < 8 ? "translate-x-3" : ""}`} />)}
    </div>
    <div className="absolute bottom-[12%] left-[14%] h-[53%] w-[2px] bg-black/30" /><div className="absolute bottom-[12%] right-[14%] h-[53%] w-[2px] bg-black/30" />
    <div className="absolute bottom-[65%] left-[14%] right-[14%] h-[2px] bg-[#d5b682]/30" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
  </div>;
}
