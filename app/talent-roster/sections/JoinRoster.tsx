import FadeIn from "@/components/motion/FadeIn";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";

export default function JoinRoster() {
  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            JOIN THE <span className="text-cream">ELITE</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
            We are always looking for exceptional talent to join our roster. 
            If you are ready to take your career to the next level, we want to hear from you.
          </p>
          <div className="flex justify-center">
            <AnimatedButton href="/contact">
              Apply Now
            </AnimatedButton>
          </div>
        </FadeIn>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zodiac/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
