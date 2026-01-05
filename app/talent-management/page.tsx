import TalentHero from "./sections/TalentHero";
import BrandsTicker from "../influencer-marketing/sections/BrandsTicker";
import TalentWhatWeDo from "./sections/TalentWhatWeDo";
import CaseStudy from "../influencer-marketing/sections/CaseStudies";
import TalentStats from "./sections/TalentStats";
import TalentCTA from "./sections/TalentCTA";

export default function TalentManagement() {
  return (
    <main className="bg-black min-h-screen">
      <TalentHero />
      <BrandsTicker />
      <TalentWhatWeDo />
      <CaseStudy />
      <TalentStats />
      <TalentCTA />
    </main>
  );
}