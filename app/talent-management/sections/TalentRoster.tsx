import HorizontalTicker from "@/components/motion/HorizontalTicker";

export default function TalentRoster() {
  return (
    <section className="py-12 bg-black border-y border-white/10 overflow-hidden">
      <HorizontalTicker duration={20}>
        <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 uppercase tracking-tighter whitespace-nowrap">
          Exclusive Roster • Global Reach • Elite Talent • Industry Leaders •
        </span>
      </HorizontalTicker>
    </section>
  );
}
