import HeroSection from "./sections/HeroSection";
import BrandsTicker from "./sections/BrandsTicker";
import CaseStudy from "./sections/CaseStudies";
import HowItWorks from "./sections/HowItWorks";
import CTA from "./sections/CTA";
import WhatWeDo from "./sections/WhatWeDo";

export default function InfluencerMarketing() {
  return (
    <main>
      <HeroSection />
      <BrandsTicker />
      <WhatWeDo />
      <HowItWorks />
      <CaseStudy />
      <CTA />
    </main>
  );
}