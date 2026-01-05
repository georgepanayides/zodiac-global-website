import FadeIn from "@/components/motion/FadeIn";

export default function ContactDetails() {
  const details = [
    {
      title: "General Enquiries",
      email: "hello@zodiacglobal.com",
      desc: "For all general questions and information."
    },
    {
      title: "Talent Management",
      email: "talent@zodiacglobal.com",
      desc: "For representation and roster inquiries."
    },
    {
      title: "Brand Partnerships",
      email: "partnerships@zodiacglobal.com",
      desc: "For brands looking to collaborate."
    },
    {
      title: "Press & Media",
      email: "press@zodiacglobal.com",
      desc: "For media kits and interview requests."
    }
  ];

  return (
    <section className="py-20 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {details.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group">
                <h3 className="text-xl text-white font-bold mb-2 group-hover:text-cream transition-colors">
                  {item.title}
                </h3>
                <a 
                  href={`mailto:${item.email}`}
                  className="block text-white/80 hover:text-white mb-4 text-lg border-b border-white/20 hover:border-white inline-block pb-1 transition-all"
                >
                  {item.email}
                </a>
                <p className="text-white/40 text-sm font-light">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
