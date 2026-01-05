"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import { motion } from "motion/react";

export default function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <FadeIn>
            <div className="absolute -top-40 -left-100 w-164 h-164 rounded-full border border-cream-900 bg-zodiac-900/50 -z-1" />
            </FadeIn>
            <FadeIn>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-8 leading-tight">
                Connecting Brands with <br />
                <span className="text-white/40">Cultural Voices.</span>
              </h3>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  At Zodiac Global, we don&apos;t just manage influencers; we architect movements. 
                  We bridge the gap between premium brands and the digital voices that shape culture.
                </p>
                <p>
                  Our data-driven approach ensures that every partnership is authentic, 
                  every campaign is measurable, and every piece of content resonates with 
                  the audience that matters most to you.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                {["Strategy", "Casting", "Management", "Reporting"].map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full bg-cream-900 border border-white/10 text-cream-100/80 text-sm hover:bg-cream-800/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="relative">
            <FadeIn delay={0.3} direction="left">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-zodiac-500/30 rounded-2xl z-0" />
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-zodiac-900/20 rounded-2xl z-0" />
                
                {/* Main Image Wrapper */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
                  <Image
                    src="/images/HQB06728.jpg"
                    alt="Influencer Marketing Strategy"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Floating Card */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl z-30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cream-100 font-semibold text-sm">Engagement Rate</span>
                      <span className="text-green-400 text-xs font-bold">▲ 12.5%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="h-full bg-zodiac-900"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
