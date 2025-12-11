import FadeIn from "@/components/motion/FadeIn";
import Link from "next/link";

export default function TalentCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            YOU HAVE THE TALENT. <br />
            <span className="text-white/40">WE HAVE THE BLUEPRINT.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Join a roster of elite creators who are redefining the industry.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Link 
            href="/contact?tab=talent" 
            className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
          >
            Apply to Join
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
