"use client";

import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-end justify-center overflow-hidden bg-transparent">
      {/* Background Elements */}
      {/* Gradient overlay: remove `bg-black` so `to-transparent` reveals the dome behind this section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 p-9">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
          >
            WE ARE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
              ZODIAC GLOBAL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light px-4"
          >
            A next-generation Influencer Marketing and Talent Management agency connecting raw creativity with commercial outcomes.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
