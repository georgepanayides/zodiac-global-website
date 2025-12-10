import HowItWorksCard from "@/components/ui/cards/HowItWorksCard";
import FadeIn from "@/components/motion/FadeIn";

const STEPS = [
  {
    id: "01",
    title: "Discover",
    description: "We uncover what drives your brand through purpose clarity, audience insight, and business focus.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Strategy",
    description: "We craft data-driven strategies that align with your goals and resonate with your target audience.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2874&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Activate",
    description: "We manage the entire campaign lifecycle, from talent negotiation to content approval and publishing.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Measure",
    description: "We provide comprehensive reporting and analysis to track performance and optimize ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold text-cream text-center mb-16 tracking-tight">
            How it works
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {STEPS.map((step, idx) => (
            <FadeIn 
              key={step.id} 
              delay={idx * 0.2}
              className={idx % 2 === 1 ? "lg:mt-24" : ""}
            >
              <HowItWorksCard {...step} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
