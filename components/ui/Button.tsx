import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = { href?: string; children: React.ReactNode; variant?: "dark" | "light" | "outline"; className?: string; type?: "button" | "submit"; };

export function Button({ href, children, variant = "dark", className, type = "button" }: ButtonProps) {
  const styles = {
    dark: "bg-ink text-paper hover:bg-brick",
    light: "bg-paper text-ink hover:bg-white",
    outline: "border border-current/35 text-current hover:border-current",
  }[variant];
  const content = <><span>{children}</span><ArrowUpRight size={16} strokeWidth={1.7} /></>;
  const shared = cn("inline-flex items-center justify-center gap-4 rounded-full px-5 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-colors", styles, className);
  return href ? <Link href={href} className={shared}>{content}</Link> : <button type={type} className={shared}>{content}</button>;
}
