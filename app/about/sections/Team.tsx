"use client";

import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";

const team = [
  {
    name: "Danny Agg",
    role: "CEO",
    image: "/images/team/Danny-1-1366x2048.jpeg",
  },
  {
    name: "Sam",
    role: "Co-Founder",
    image: "/images/team/sam-team-pic.jpg",
  },
  {
    name: "Steve",
    role: "Director",
    image: "/images/team/Steve-1366x2048.jpeg",
  },
  {
    name: "Max",
    role: "Head of Operations",
    image: "/images/team/Max-1366x2048.jpeg",
  },
  {
    name: "Yam",
    role: "Talent Manager",
    image: "/images/team/Yam-scaled.jpeg",
  },
  {
    name: "Chelsey",
    role: "Senior Talent Manager",
    image: "/images/team/Chelsey-1365x2048.jpeg",
  },
  {
    name: "Georgie",
    role: "Senior Talent Manager",
    image: "/images/team/Georgie-scaled.jpeg",
  },
  {
    name: "Lily",
    role: "Talent Manager",
    image: "/images/team/Lily.jpg",
  },
  {
    name: "Olivia",
    role: "Talent Manager",
    image: "/images/team/Olivia-scaled.jpg",
  },
  {
    name: "Micia",
    role: "Talent Manager",
    image: "/images/team/Micia-.jpeg",
  },
];

export default function Team() {
  return (
    <section className="md:py-32 py-12 bg-black relative">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-16">
            Meet the <br />
            <span className="text-white/40">architects of influence.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-white/60 uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
