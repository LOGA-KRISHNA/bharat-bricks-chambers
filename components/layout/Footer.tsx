import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { company, siteNav } from "@/lib/constants";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export function Footer() {

  return (
    <footer className="bg-ink px-5 pb-7 pt-16 text-paper md:px-8 md:pt-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-paper/20 pb-16 md:grid-cols-[1.3fr_0.8fr_1.1fr]">
          {/* Company Identity & Address */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/bbc-logo.png"
                alt="Bharath Bricks and Chambers Logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain brightness-125"
              />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#d9b17a]">
                Bharath Bricks and Chambers
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-paper/80">
              Premium bricks and architectural materials for lasting construction.
            </p>
            <div className="mt-6 flex items-start gap-3 text-xs leading-6 text-paper/65">
              <MapPin size={16} className="mt-1 shrink-0 text-[#d9b17a]" />
              <span>{company.address}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="eyebrow text-paper/55">Explore</p>
            <div className="mt-5 grid gap-3">
              {siteNav.map((item) => (
                <Link
                  className="text-sm text-paper/80 hover:text-paper transition-colors"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Contact & Social */}
          <div>
            <p className="eyebrow text-paper/55">Contact & Social</p>
            <div className="mt-5 space-y-4 text-sm text-paper/80">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#d9b17a]" />
                <a
                  href={`tel:${company.phone}`}
                  className="hover:text-paper hover:underline"
                >
                  {company.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#d9b17a]" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-paper hover:underline"
                >
                  {company.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-paper/90 transition-colors hover:border-paper hover:bg-paper/10"
                >
                  <FacebookIcon className="w-4 h-4 text-[#d9b17a]" />

                  <span>Facebook</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col gap-3 pt-6 text-[10px] font-semibold tracking-[.12em] uppercase text-paper/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Architectural Masonry & Building Materials</span>
        </div>
      </div>
    </footer>
  );
}

