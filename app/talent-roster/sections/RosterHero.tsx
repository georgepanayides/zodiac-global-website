import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

export default function RosterHero() {
  return (
    <section className="relative pt-40 pb-12 bg-black overflow-hidden">
      {/* Abstract Circle */}
      <div className="absolute -top-100 left-1/2 -translate-x-1/2 w-180 h-180 rounded-full border border-white/10 bg-cream-950 -z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center justify-center">
            <Image 
              src="/logo/zodiacgloballogo.png" 
              alt="Zodiac Logo" 
              width={90} 
              height={90} 
              className="opacity-80 mb-6"
            />
            <h1 className="text-cream text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tight text-center mb-8">
              The
              <br />
              Roster
            </h1>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed text-center">
            A curated selection of the world&apos;s most influential voices. 
            Creators, tastemakers, and industry leaders shaping the future of digital culture.
          </p>
        </FadeIn>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 via-black to-black pointer-events-none" />
    </section>
  );
}
