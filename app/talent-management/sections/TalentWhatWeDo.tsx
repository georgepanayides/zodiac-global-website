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
            <div className="absolute -top-15 -left-50 md:-top-25 md:-left-100 w-90 h-90 md:w-164 md:h-164 rounded-full border border-cream-900 bg-zodiac-900/50 -z-1" />
            </FadeIn>
            <FadeIn>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-8 leading-tight">
                360° TALENT <br />
                <span className="text-white/40">MANAGEMENT.</span>
              </h3>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6 text-xl text-cream !font-bold leading-relaxed">
                <p>
                  Zodiac Global is a talent management agency operating across the UK and the Middle East, specialising in the representation and commercial growth of high-profile creators.
                </p>
                <p>
                  We work closely with talent across food, fashion, sport, lifestyle entertainment and more focusing on long-term value creation rather than short-term brand deals. Our approach is centred on helping creators evolve into sustainable personal brands, building IP, launching creator-led ventures, and developing scalable businesses alongside traditional partnerships.
                </p>
                <p>
                  Zodiac Global handles everything from talent strategy and deal negotiation to campaign execution and commercial structuring.
                </p>
                <p>
                  Zodiac Global has grown into a multi-market, multi-million-dollar agency with offices in Dubai and the UK, representing some of the most recognisable creators in the space and working with household-name brands across multiple sectors.
                </p>
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
