"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_VIDEO_URL, HERO_POSTER_URL, HERO_VIDEO_MOBILE_URL } from "@/lib/constants";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);

    const handleChange = () => {
      setIsReducedMotion(motionQuery.matches);
    };

    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isReducedMotion) return;

    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      video.play().then(() => {
        setVideoPlaying(true);
      }).catch(() => {
        // Autoplay policy or buffering delay
      });
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("canplay", attemptPlay, { once: true });
      video.addEventListener("playing", () => setVideoPlaying(true), { once: true });
    }

    const retryTimer = setTimeout(attemptPlay, 100);

    return () => {
      clearTimeout(retryTimer);
      video.removeEventListener("canplay", attemptPlay);
    };
  }, [isReducedMotion]);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-[#14100d] text-paper">
      {/* HTML5 Native Video Element */}
      {!isReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER_URL}
          onPlaying={() => setVideoPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center pointer-events-none transition-opacity duration-1000 ${
            videoPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={HERO_VIDEO_MOBILE_URL} type="video/mp4" media="(max-width: 639px)" />
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      )}

      {/* Poster Image Layer */}
      <div
        className={`absolute inset-0 h-full w-full bg-cover bg-center pointer-events-none transition-opacity duration-1000 ${
          !videoPlaying ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${HERO_POSTER_URL})` }}
      />

      {/* Dark Gradient Overlay for Contrast & Depth (z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#14100d]/92 via-[#14100d]/65 to-[#14100d]/35" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#14100d]/80 via-transparent to-[#14100d]/90" />

      {/* Hero Content Layer (z-20) */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-5 pb-8 pt-28 md:px-8 md:pb-12 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Brand Tagline Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-paper/20 bg-paper/10 px-4 py-1.5 backdrop-blur-md">
            <Image
              src="/bbc-logo.png"
              alt="BBC Logo"
              width={24}
              height={24}
              className="h-5 w-auto object-contain brightness-125"
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d9b17a]">
              Bharath Bricks and Chambers
            </span>
          </div>

          {/* Primary Heading */}
          <h1 className="display mt-6 text-5xl leading-[.88] text-paper sm:text-7xl md:text-[clamp(4.8rem,9vw,9.2rem)]">
            BUILT FROM THE<br />
            <em className="font-normal text-[#d9b17a]">GROUND UP.</em>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 max-w-xl text-base leading-7 text-paper/85 md:text-lg">
            Precision-made architectural bricks engineered for structural integrity, timeless texture, and enduring craftsmanship.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/products" variant="light" className="group gap-2">
              <span>Explore Our Bricks</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Link
              href="/contact"
              className="rounded-full border border-paper/35 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-paper backdrop-blur-sm transition-all hover:border-paper hover:bg-paper/10"
            >
              Talk to Our Team
            </Link>
          </div>
        </motion.div>

        {/* Bottom Hero Indicator & Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-end justify-between border-t border-paper/20 pt-5 text-paper/70"
        >
          <div>
            <p className="eyebrow text-paper/50">Industrial Manufacturing</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-paper/90">
              Cinematic Facility Tour
            </p>
          </div>

          <a
            href="#materials-overview"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-paper/80 transition-colors hover:text-paper"
          >
            <span className="hidden sm:inline">Scroll to discover</span>
            <ArrowDown size={18} className="animate-bounce text-[#d9b17a]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


