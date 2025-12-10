"use client";

import FadeIn from "@/components/motion/FadeIn";

const values = [
  {
    title: "Authenticity First",
    description: "We don't do fake. We build partnerships based on real alignment and shared values.",
  },
  {
    title: "Data Driven",
    description: "Creativity is our heart, but data is our brain. Every decision is backed by analytics.",
  },
  {
    title: "Culture Shifters",
    description: "We don't just follow trends; we help create them. We aim to shape the cultural conversation.",
  },
  {
    title: "Radical Transparency",
    description: "No hidden fees, no black boxes. We believe in open, honest communication with our partners.",
  },
];

export default function Values() {
  return (
    <section className="py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter sticky top-32">
                Our <br />
                <span className="text-white/40">DNA.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full">
                  <div className="text-sm font-mono text-white/40 mb-6">0{idx + 1}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
