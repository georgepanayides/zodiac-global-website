import TalentHero from "./sections/TalentHero";
import TalentServices from "./sections/TalentServices";
import TalentRoster from "./sections/TalentRoster";
import TalentCTA from "./sections/TalentCTA";

export default function TalentManagement() {
  return (
    <main className="bg-black min-h-screen">
      <TalentHero />
      <TalentRoster />
      <TalentServices />
      <TalentCTA />
    </main>
  );
}