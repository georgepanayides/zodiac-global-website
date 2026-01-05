import RosterHero from "./sections/RosterHero";
import RosterGrid from "./sections/RosterGrid";
import JoinRoster from "./sections/JoinRoster";

export default function TalentRosterPage() {
  return (
    <main className="bg-black min-h-screen">
      <RosterHero />
      <RosterGrid />
      <JoinRoster />
    </main>
  );
}
