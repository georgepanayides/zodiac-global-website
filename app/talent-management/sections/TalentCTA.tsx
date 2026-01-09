"use client";

import FadeIn from "@/components/motion/FadeIn";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";
import HeartParticles from "@/components/motion/HeartParticles";

export default function TalentCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-black flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-zodiac-900/20 to-purple-900/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <div className="relative inline-block">
            <HeartParticles />
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream-100 tracking-tighter leading-[0.9] mb-8">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zodiac via-cream to-zodiac pr-2">
                GET STARTED?
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
            Join a roster of elite talent.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <AnimatedButton href="/contact">
            Apply to Join
          </AnimatedButton>
        </FadeIn>
      </div>
    </section>
  );
}
