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
          <div className="relative z-10 order-2 lg:order-1">
            <FadeIn>
            <div className="absolute -top-15 -left-50 md:-top-25 md:-left-100 w-90 h-90 md:w-164 md:h-164 rounded-full border border-cream-900 bg-zodiac-900/50 -z-1" />
            </FadeIn>
            <FadeIn>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-4 leading-tight">
                Shaping influence <br />
                <span className="text-white/40">across the GCC.</span>
              </h3>
              <p className="text-xl text-cream-200 font-medium mb-8">
                Built for influence in the modern Middle East
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  Zodiac Global is a Dubai-born influencer and talent agency built for the modern Middle East. 
                  We partner with ambitious brands across the GCC to create creator-led work that is 
                  culturally relevant, commercially effective, and grounded in a deep understanding of the region.
                </p>
                <p>
                  Working at the intersection of brand, culture, and performance, our approach combines 
                  regional insight with world-class execution. We design and deliver creator partnerships 
                  that move beyond visibility, focusing instead on relevance, quality, and long-term impact.
                </p>
                <p>
                  Our culturally led framework ensures that every collaboration is intentional, every 
                  campaign is measurable, and every piece of content is crafted to resonate with audiences 
                  who value authenticity, credibility, and purpose. The result is work that feels native 
                  to the market, performs with clarity, and delivers meaningful impact.
                </p>
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
