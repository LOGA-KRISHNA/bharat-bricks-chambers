import { cn } from "@/lib/utils";

export function PageIntro({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return <section className={cn("page-grid px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-48", dark ? "bg-ink text-paper" : "bg-paper")}><div className="mx-auto max-w-[1280px]"><p className={cn("eyebrow", dark ? "text-[#d9b17a]" : "text-brick")}>{eyebrow}</p><h1 className="display balanced mt-6 max-w-5xl text-5xl leading-[.9] md:text-8xl">{title}</h1><p className={cn("mt-8 max-w-xl text-base leading-7", dark ? "text-paper/70" : "text-muted")}>{text}</p></div></section>;
}
