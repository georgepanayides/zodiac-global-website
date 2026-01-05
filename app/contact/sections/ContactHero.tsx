import FadeIn from "@/components/motion/FadeIn";

export default function ContactHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-white/5 pointer-events-none" />

      {/* Video Clips */}
      <div className="absolute top-0 md:top-20 -left-20 w-72 h-96 md:w-96 md:h-[500px] opacity-20 rotate-12 mix-blend-screen pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover rounded-3xl grayscale"
        >
          <source src="https://cdn.zodiacglobal.com/zodiac-short-video-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute bottom-0 -right-20 w-72 h-96 md:w-96 md:h-[500px] opacity-20 -rotate-12 mix-blend-screen pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover rounded-3xl grayscale"
        >
          <source src="/videos/zodiac-short-video-2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h1 className="text-cream text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-tight text-center mb-8 mix-blend-difference">
            Get In
            <br />
            Touch
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed text-center">
            Ready to start your next project? We are here to help you elevate your brand or career to the next level.
          </p>
        </FadeIn>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zodiac/10 via-black to-black pointer-events-none" />
    </section>
  );
}
