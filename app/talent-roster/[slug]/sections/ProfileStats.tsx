import FadeIn from "@/components/motion/FadeIn";

interface StatItem {
  label: string;
  value: string;
  subtext?: string;
}

interface ProfileStatsProps {
  stats: StatItem[];
}

export default function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <section className="py-20 bg-black border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-white/60 uppercase tracking-widest text-sm mb-1">
                  {stat.label}
                </p>
                {stat.subtext && (
                  <p className="text-white/40 text-xs font-mono">
                    {stat.subtext}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
