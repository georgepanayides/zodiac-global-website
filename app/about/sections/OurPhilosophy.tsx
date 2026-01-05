import FadeIn from "@/components/motion/FadeIn";

export default function OurPhilosophy() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
              We don&apos;t just chase trends. <br />
              <span className="text-white/40">We set them.</span>
            </h2>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                In a world of noise, Zodiac cuts through. We believe that true influence isn&apos;t about vanity metrics—it&apos;s about connection. We curate partnerships that feel authentic, creating content that stops the scroll and starts a conversation.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                Born from a desire to disrupt the traditional agency model, we operate at the intersection of data-driven strategy and raw, unfiltered creativity. We are the architects of the next generation of brand culture.
              </p>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
