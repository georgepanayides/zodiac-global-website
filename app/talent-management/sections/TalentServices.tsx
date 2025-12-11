import FadeIn from "@/components/motion/FadeIn";
import { FaHandshake, FaChartLine, FaBullhorn, FaFileContract } from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Career Strategy",
    description: "Long-term roadmap planning to transition from influencer to entrepreneur and global brand."
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "Brand Partnerships",
    description: "Securing and negotiating high-value deals with the world's leading lifestyle and luxury brands."
  },
  {
    icon: <FaBullhorn className="text-3xl" />,
    title: "PR & Communications",
    description: "Strategic narrative building, crisis management, and media placement to control your story."
  },
  {
    icon: <FaFileContract className="text-3xl" />,
    title: "Legal & Business",
    description: "Comprehensive contract review, IP protection, and business structure advisory."
  }
];

export default function TalentServices() {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              360° MANAGEMENT
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="mb-6 text-white/80 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
