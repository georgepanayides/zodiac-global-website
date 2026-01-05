"use client";

import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";
import { motion } from "motion/react";

export default function ProfileCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-black flex items-center justify-center border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-zodiac/10 to-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            WANT TO WORK <br />
            <span className="text-white/40">
              WITH THIS TALENT?
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
            Get in touch to discuss partnerships, campaigns, and opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Link href="/contact" className="inline-block group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-tight hover:bg-gray-100 transition-colors relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zodiac/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
