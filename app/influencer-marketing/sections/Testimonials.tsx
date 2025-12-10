"use client";

import FadeIn from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote: "Zodiac didn't just find us influencers; they found us brand evangelists. The ROI on our Q4 campaign was unlike anything we've seen in traditional media.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "/images/brands/brand-1.png", // Placeholder, assuming we might have brand logos or user avatars
  },
  {
    quote: "The creative strategy was bold, and it paid off. They understand the pulse of Gen Z better than any agency we've worked with.",
    author: "Marcus Chen",
    role: "Head of Growth, VibeCheck",
    image: "/images/brands/brand-2.png",
  },
  {
    quote: "Seamless execution from start to finish. The content felt native, authentic, and drove real conversions, not just vanity likes.",
    author: "Elena Rodriguez",
    role: "Director of Marketing, LuxeLife",
    image: "/images/brands/brand-3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-cream tracking-tighter mb-16 text-center">
            Trusted by the <br />
            <span className="text-white/40">world&apos;s best brands.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between group">
                <div>
                  {/* Quote Icon */}
                  <div className="mb-6 text-4xl text-zodiac font-serif">&quot;</div>
                  <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zodiac to-zodiac/50 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
