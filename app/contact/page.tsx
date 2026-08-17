import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageIntro } from "@/components/sections/PageIntro";
import { company } from "@/lib/constants";

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}


export const metadata: Metadata = {
  title: "Contact Bharath Bricks and Chambers",
  description:
    "Get in touch with Bharath Bricks and Chambers in Tiruttani, Thiruvallur District. Call +91 90032 29004 or email bbc.chambers25@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        dark
        eyebrow="Project enquiries & Location"
        title="Let’s make the first material decision a good one."
        text="Share the essentials of your project or contact our team directly for material samples, specifications, and project guidance."
      />
      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Official Contact & Business Details Panel */}
          <aside className="flex flex-col justify-between space-y-12">
            <div>
              <p className="eyebrow text-brick">Contact Information</p>
              <h2 className="display mt-4 text-4xl leading-tight">
                Visit Us, Call, or Write to Our Team.
              </h2>
              <p className="mt-6 text-sm leading-7 text-muted">
                For architectural specifications, sample requests, material availability, and custom volume pricing, reach out through any of our official channels below.
              </p>
            </div>

            <div className="grid gap-8">
              {/* Visit Us */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-paper-deep border border-ink/10">
                <div className="p-3 rounded-xl bg-brick/10 text-brick shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink/60">
                    Visit Us
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ink">{company.name}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{company.address}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-paper-deep border border-ink/10">
                <div className="p-3 rounded-xl bg-brick/10 text-brick shrink-0">
                  <Mail size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink/60">
                    Email
                  </h3>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-sm font-semibold text-ink hover:text-brick underline underline-offset-4"
                  >
                    {company.email}
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brick hover:underline"
                  >
                    <span>Email Us</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-paper-deep border border-ink/10">
                <div className="p-3 rounded-xl bg-brick/10 text-brick shrink-0">
                  <Phone size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink/60">
                    Phone
                  </h3>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-1 block text-sm font-semibold text-ink hover:text-brick"
                  >
                    {company.displayPhone}
                  </a>
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brick hover:underline"
                  >
                    <span>Call Us</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-paper-deep border border-ink/10">
                <div className="p-3 rounded-xl bg-brick/10 text-brick shrink-0">
                  <FacebookIcon className="w-[22px] h-[22px]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink/60">
                    Facebook
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ink">{company.name}</p>
                  <a
                    href={company.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brick hover:underline"
                  >
                    <span>Visit Facebook</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact Form Container */}
          <div className="rounded-3xl border border-ink/10 bg-paper p-8 shadow-sm md:p-12">
            <h3 className="display text-3xl">Send an Enquiry</h3>
            <p className="mt-2 text-xs text-muted mb-8">
              Fill out the project details below and our team will get back to you promptly.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

