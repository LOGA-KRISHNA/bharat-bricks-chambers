import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return <section className="bg-paper-deep px-5 py-20 md:px-8 md:py-32"><div className="mx-auto max-w-[1280px]"><div className="grid gap-14 lg:grid-cols-[1fr_1fr]"><SectionHeading eyebrow="A material practice" title="Clay carries memory. Architecture gives it purpose." text={company.description} /><div className="grid gap-7 sm:grid-cols-3 lg:pt-16">{company.values.map((value, index) => <Reveal delay={index * .08} key={value.number} className="border-t border-ink/20 pt-4"><span className="eyebrow text-brick">{value.number}</span><h3 className="mt-8 text-lg font-medium">{value.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{value.text}</p></Reveal>)}</div></div></div></section>;
}
