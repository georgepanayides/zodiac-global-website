import FadeIn from "@/components/motion/FadeIn";

export default function TalentHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zodiac/20 via-black to-black opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">
              ICONS
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            We don&apos;t just manage careers; we architect legacies. 
            From viral moments to global brands, we guide the world&apos;s most influential voices.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
