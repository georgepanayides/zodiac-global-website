import FadeIn from "@/components/motion/FadeIn";

export default function OurPhilosophy() {
  return (
    <section className="md:py-32 py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
              Built on strategy, <br />
              <span className="text-white/40">powered by culture.</span>
            </h2>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                Zodiac is built around people. The talent we represent, the brands we work with and the team behind it all. Our culture is collaborative, direct and long-term focused. We manage careers and partnerships with the same mindset - be selective, do the work properly and build things that last.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
