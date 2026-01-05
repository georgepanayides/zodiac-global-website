import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

export default function TalentWhatWeDo() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <FadeIn>
            <div className="absolute -top-40 -left-100 w-164 h-164 rounded-full border border-cream-900 bg-zodiac-900/50 -z-1" />
            </FadeIn>
            <FadeIn>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-8 leading-tight">
                Elevating Talent to <br />
                <span className="text-white/40">Global Icons.</span>
              </h3>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  We don&apos;t just represent talent; we build careers. Our 360° management approach ensures that every aspect of your personal brand is curated for long-term success.
                </p>
                <p>
                  From strategic brand partnerships to content development and legal support, we provide the infrastructure you need to focus on what you do best: creating.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                {["Brand Partnerships", "Career Strategy", "Legal & Finance", "Content Growth"].map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full border border-white/10 text-cream-100/80 text-sm transition-colors cursor-default bg-cream-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="relative order-1 lg:order-2">
            {/* Abstract Zodiac Circles */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-zodiac-900/20 z-0 animate-pulse" />
            <div className="absolute top-1/2 -right-10 w-32 h-32 rounded-full bg-zodiac-900/10 blur-2xl z-0" />

            <FadeIn delay={0.3} direction="right">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mr-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-zodiac-500/30 rounded-2xl z-0" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-zodiac-900/20 rounded-2xl z-0" />
                
                {/* Main Image Wrapper */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
                  <Image
                    src="/images/HQB06855.jpg"
                    alt="Talent Management Strategy"
                    fill
                    className="object-cover"
                  />
                  
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
