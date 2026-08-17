import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, text, className }: { eyebrow?: string; title: string; text?: string; className?: string }) {
  return <div className={cn("max-w-3xl", className)}>
    {eyebrow && <p className="eyebrow mb-5 text-brick">{eyebrow}</p>}
    <h2 className="display balanced text-4xl leading-[.96] md:text-6xl">{title}</h2>
    {text && <p className="mt-6 max-w-xl text-sm leading-7 text-muted md:text-base">{text}</p>}
  </div>;
}
