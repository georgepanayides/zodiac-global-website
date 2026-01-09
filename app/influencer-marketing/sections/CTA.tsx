"use client";

import FadeIn from "@/components/motion/FadeIn";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";
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
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream tracking-tighter leading-[0.9] mb-8 uppercase">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zodiac via-cream to-zodiac pr-2">
                get started?
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
            Strategic creator partnerships, delivered with precision.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <AnimatedButton href="/contact">
            Start Your Campaign
          </AnimatedButton>
        </FadeIn>
      </div>
    </section>
  );
}
