import FadeIn from "@/components/motion/FadeIn";
import CountUp from "@/components/animations/CountUp";

const stats = [
  { label: "Total Reach", value: 500, suffix: "M+" },
  { label: "Campaigns Delivered", value: 2.5, suffix: "K+" },
  { label: "Active Creators", value: 150, suffix: "+" },
  { label: "Client Retention", value: 90, suffix: "%" },
];

export default function ZodiacNumbers() {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold text-cream mb-4">
                    Zodiac by the Numbers
                </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
                <p className="text-cream max-w-2xl mx-auto">
                    Data-driven results that speak for themselves. We deliver impact at scale.
                </p>
            </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.1 * index + 0.3}>
                <div className="text-center group">
                    <div className="text-4xl md:text-6xl font-bold text-cream mb-2 transition-all duration-300 flex justify-center items-baseline">
                        <CountUp
                            from={0}
                            to={stat.value}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />
                        <span>{stat.suffix}</span>
                    </div>
                    <div className="text-sm md:text-base text-white/40 uppercase tracking-widest font-medium">
                        {stat.label}
                    </div>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
