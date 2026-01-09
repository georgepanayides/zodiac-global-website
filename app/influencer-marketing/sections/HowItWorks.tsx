import HowItWorksCard from "@/components/ui/cards/HowItWorksCard";
import FadeIn from "@/components/motion/FadeIn";

const STEPS = [
  {
    id: "01",
    title: "Set the direction",
    description: "We define what success looks like, aligning brand ambition with the role creators should play within the wider business or campaign ecosystem.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Understand the landscape",
    description: "We uncover the cultural, platform, and audience dynamics that matter locally, shaping a strategic foundation rooted in how influence truly works across the region.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2874&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Select the talent",
    description: "We identify creators with genuine credibility, relevance, and creative alignment, ensuring every partnership feels authentic to both brand and audience.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Contract & brief",
    description: "We manage contracting, briefing, and creative alignment, creating clarity and structure while enabling creators to deliver at their best.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Bring it to life",
    description: "We oversee execution end-to-end, responding in real time to performance signals to maximise relevance, quality, and impact.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Measurement & reporting",
    description: "We provide clear, transparent reporting and insight to evaluate performance, demonstrate value, and inform what comes next.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function HowItWorks() {
  return (
    <section className="md:py-24 py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-bold text-cream text-center mb-8 tracking-tight">
            Our approach
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {STEPS.map((step, idx) => (
            <FadeIn 
              key={step.id} 
              delay={idx * 0.1}
              className={idx % 3 === 1 ? "lg:mt-12" : ""}
            >
              <HowItWorksCard {...step} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
