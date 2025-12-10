import AboutHero from "./sections/AboutHero";
import OurPhilosophy from "./sections/OurPhilosophy";
import Team from "./sections/Team";
import Values from "./sections/Values";
import CTA from "../influencer-marketing/sections/CTA";
import DomeGallery from "@/components/ui/dome-gallery/DomeGallery";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen relative">
      <div className="absolute inset-0 h-screen z-0 overflow-hidden">
        <DomeGallery />
      </div>
      <div className="relative z-10">
        <AboutHero />
        <div className="bg-black relative z-20">
          <OurPhilosophy />
          <Values />
          <Team />
          <CTA />
        </div>
      </div>
    </main>
  );
}

