import HeroSection from "./sections/HeroSection";
import BrandsTicker from "./sections/BrandsTicker";
import ZodiacNumbers from "./sections/ZodiacNumbers";
import CaseStudy from "./sections/CaseStudies";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

export default function InfluencerMarketing() {
  return (
    <main>
      <HeroSection />
      <BrandsTicker />
      <CaseStudy />
      <ZodiacNumbers />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
  );
}