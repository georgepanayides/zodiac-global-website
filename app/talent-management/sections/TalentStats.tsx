
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid/BentoGrid";
import FadeIn from "@/components/motion/FadeIn";
import CountUp from "@/components/animations/CountUp";
import RevenueChart from "../../../components/animations/RevenueChart";
import DiagonalBrandTicker from "../../../components/animations/DiagonalBrandTicker";
import AudiencePulse from "../../../components/animations/AudiencePulse";
import GlobalSpin from "./GlobalSpin";
import LegalShield from "./LegalShield";
import { IoTrendingUp, IoPeople, IoBriefcase, IoGlobeOutline, IoShieldCheckmark, IoRocket } from "react-icons/io5";

export default function TalentStats() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-cream-100 mb-16 text-center">
            Why Top Talent <br />
            <span className="text-white/40">Choose Zodiac.</span>
          </h2>
        </FadeIn>

        <BentoGrid className="container mx-auto">
          {/* Revenue Growth - Large Card */}
          <BentoItem colSpan={2} rowSpan={2} className="bg-gradient-to-br from-zodiac-950 to-black relative overflow-hidden group">
            <RevenueChart />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="p-3 bg-zodiac-500/10 w-fit rounded-xl border border-zodiac-500/20 backdrop-blur-md mb-4">
                <IoTrendingUp className="text-zodiac-400" size={24} />
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-bold text-white mb-4 flex items-baseline gap-2 tracking-tight">
                  $<CountUp to={12} duration={2.5} />M+
                </div>
                <h3 className="text-xl text-cream-100 font-medium mb-3">Revenue Generated</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  We don&apos;t just negotiate deals; we build empires. Our strategic partnerships have generated over $12M in revenue for our talent roster.
                </p>
              </div>
            </div>
          </BentoItem>

          {/* Brand Partnerships */}
          <BentoItem colSpan={1} rowSpan={1} className="group relative overflow-hidden">
            <DiagonalBrandTicker />
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <IoBriefcase className="text-cream-100" size={20} />
                </div>
                <span className="text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded-full backdrop-blur-sm">
                  +45% YoY
                </span>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp to={250} duration={2} />+
                </div>
                <p className="text-white/60 text-sm">Global Brand Partners</p>
              </div>
            </div>
          </BentoItem>

          {/* Audience Reach */}
          <BentoItem colSpan={1} rowSpan={1} className="group relative overflow-hidden">
            <AudiencePulse />
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="p-2 bg-white/10 rounded-lg w-fit backdrop-blur-sm">
                <IoPeople className="text-cream-100" size={20} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">
                  <CountUp to={85} duration={2} />M+
                </div>
                <p className="text-white/60 text-sm">Total Audience Reach</p>
              </div>
            </div>
          </BentoItem>

          {/* Global Representation */}
          <BentoItem colSpan={1} rowSpan={1} className="group relative overflow-hidden">
             <GlobalSpin />
             <div className="flex flex-col h-full justify-between relative z-10">
              <div className="p-2 bg-white/10 rounded-lg w-fit backdrop-blur-sm">
                <IoGlobeOutline className="text-cream-100" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Global Reach</h3>
                <p className="text-white/60 text-xs">
                  Campaigns executed in over 15 countries across 4 continents.
                </p>
              </div>
            </div>
          </BentoItem>

          {/* Legal & Protection */}
          <BentoItem colSpan={1} rowSpan={1} className="group relative overflow-hidden">
             <LegalShield />
             <div className="flex flex-col h-full justify-between relative z-10">
              <div className="p-2 bg-white/10 rounded-lg w-fit backdrop-blur-sm">
                <IoShieldCheckmark className="text-cream-100" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Legal Shield</h3>
                <p className="text-white/60 text-xs">
                  Full in-house legal support for contract negotiation and IP protection.
                </p>
              </div>
            </div>
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  );
}
