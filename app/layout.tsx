import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { company } from "@/lib/constants";
import { getSiteUrl } from "@/lib/utils";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bharath Bricks and Chambers | Premium Bricks & Architectural Materials",
    template: "%s | Bharath Bricks and Chambers",
  },
  description:
    "Bharath Bricks and Chambers manufactures and supplies quality bricks and architectural building materials for residential, commercial and architectural applications.",
  keywords: [
    "Bharath Bricks and Chambers",
    "bricks in Tiruttani",
    "brick manufacturers in Tiruttani",
    "brick manufacturers in Thiruvallur",
    "bricks in Thiruvallur",
    "machine made bricks",
    "building bricks",
    "architectural bricks",
    "brick tiles",
    "facade bricks",
    "exposed bricks",
    "wire cut bricks",
    "clay bricks",
    "construction bricks",
    "brick suppliers in Tamil Nadu",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: company.name,
    title: "Bharath Bricks and Chambers | Premium Bricks & Architectural Materials",
    description:
      "Bharath Bricks and Chambers manufactures and supplies quality bricks and architectural building materials for residential, commercial and architectural applications.",
    images: [
      {
        url: "/bbc-logo.png",
        width: 1200,
        height: 630,
        alt: "Bharath Bricks and Chambers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharath Bricks and Chambers | Premium Bricks & Architectural Materials",
    description:
      "Bharath Bricks and Chambers manufactures and supplies quality bricks and architectural building materials for residential, commercial and architectural applications.",
    images: ["/bbc-logo.png"],
  },
  verification: {
    google: company.googleSiteVerification,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.addressObject.streetAddress,
    addressLocality: company.addressObject.addressLocality,
    addressRegion: company.addressObject.addressRegion,
    postalCode: company.addressObject.postalCode,
    addressCountry: company.addressObject.addressCountry,
  },
  sameAs: [company.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

