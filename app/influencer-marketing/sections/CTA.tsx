"use client";

import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";
import { motion } from "motion/react";
import HeartParticles from "@/components/motion/HeartParticles";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-black flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <div className="relative inline-block">
            <HeartParticles />
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream tracking-tighter leading-[0.9] mb-8">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zodiac via-cream/35 to-zodiac/50">
                GO VIRAL?
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
            Stop shouting into the void. Start building a movement. Let&apos;s craft a campaign that defines your brand.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Link href="/contact" className="inline-block group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-tight hover:bg-gray-100 transition-colors relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Campaign</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zodiac/5 to-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
