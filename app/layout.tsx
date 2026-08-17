import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const geist = localFont({ src: "./fonts/geist-latin.woff2", variable: "--font-geist-sans", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bharatbricks.example"),
  title: { default: "Bharat Bricks | Premium Bricks & Architectural Materials", template: "%s | Bharat Bricks" },
  description: "Explore premium machine-made bricks, brick tiles, facade materials and architectural brick solutions from Bharat Bricks.",
  keywords: ["architectural bricks", "brick tiles", "facade materials", "Bharat Bricks"],
  openGraph: { type: "website", locale: "en_IN", siteName: "Bharat Bricks" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
