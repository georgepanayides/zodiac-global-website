import ContactHero from "./sections/ContactHero";
import ContactFormSection from "./sections/ContactFormSection";
import ContactDetails from "./sections/ContactDetails";
import Locations from "./sections/Locations";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <ContactHero />
      <ContactFormSection />
      <Locations />
      <ContactDetails />
    </main>
  );
}
