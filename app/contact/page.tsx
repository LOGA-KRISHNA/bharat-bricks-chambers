import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageIntro } from "@/components/sections/PageIntro";

export const metadata: Metadata = { title: "Contact", description: "Contact Bharat Bricks to discuss samples, architectural materials and project requirements." };
export default function ContactPage() { return <><PageIntro dark eyebrow="Project enquiries" title="Let’s make the first material decision a good one." text="Share the essentials of your project and our team can guide the next conversation." /><section className="px-5 py-20 md:px-8 md:py-32"><div className="mx-auto grid max-w-[1100px] gap-14 lg:grid-cols-[.55fr_1fr]"><aside><p className="eyebrow text-brick">Bharat Bricks</p><h2 className="display mt-5 text-4xl leading-none">Bring a drawing, a question, or a material direction.</h2><p className="mt-6 text-sm leading-7 text-muted">For final selection, product performance and system information, we will provide the latest verified project documentation.</p></aside><ContactForm /></div></section></>; }
