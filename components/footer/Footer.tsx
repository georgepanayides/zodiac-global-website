import Link from "next/link";
import Tabs from "@/components/ui/tabs/Tabs";
import TalentForm from "@/components/ui/forms/TalentForm";
import BrandForm from "@/components/ui/forms/BrandForm";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import FadeIn from "../motion/FadeIn";

export default function Footer() {
  return (
    <footer className="w-full text-white pt-16 border-t border-cream/25 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between h-full space-y-12 py-4">
            {/* Main Contact */}
            <div>
              <span className="text-sm font-semibold tracking-tight text-white/60 mb-4 block uppercase">
                Get in touch
              </span>
              <a
                href="mailto:Info@zodiacglobal.com"
                className="text-3xl md:text-5xl font-bold hover:text-cream transition-colors leading-tight block"
              >
                info@
                <br />
                zodiacglobal.com
              </a>
            </div>

            {/* Offices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Dubai */}
              <div>
                <span className="text-sm font-semibold tracking-tight text-white/60 mb-4 block uppercase">
                  Dubai office
                </span>
                <p className="text-lg font-medium leading-relaxed text-white/90">
                  1306 concord tower,
                  <br />
                  media city,
                  <br />
                  dubai
                </p>
              </div>

              {/* London */}
              <div>
                <span className="text-sm font-semibold tracking-tight text-white/60 mb-4 block uppercase">
                  london office
                </span>
                <p className="text-lg font-medium leading-relaxed text-white/90">
                  c/o rpgcc,
                  <br />
                  40 gracechurch street,
                  <br />
                  london, england,
                  <br />
                  ec3v 0bt
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <span className="text-sm font-semibold tracking-tight text-white/60 mb-6 block uppercase">
                Follow us
              </span>
              <div className="flex gap-4">
                <a
                  href="https://www.tiktok.com/@_zodiacglobal?_r=1&_t=ZS-91sdhROEFnA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full hover:bg-white hover:text-zodiac transition-all duration-300"
                >
                  <FaTiktok className="text-xl" />
                  <span className="font-semibold text-sm">Tiktok</span>
                </a>
                <a
                  href="https://www.instagram.com/zodiacglobalgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full hover:bg-white hover:text-zodiac transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                  <span className="font-semibold text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-2 leading-tight">
              let&apos;s start
              <br />
              something new
            </h2>
            <p className="text-white/60 mb-6">
              Tell us more about your project and we&apos;ll reach out soon
            </p>
            <Tabs
              tabs={[
                {
                  id: "talent",
                  label: "i am a talent",
                  content: <TalentForm />,
                },
                {
                  id: "brand",
                  label: "i am a brand",
                  content: <BrandForm />,
                },
              ]}
              defaultTab="talent"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase">
              <Link href="/legal" className="hover:underline">
                Legal
              </Link>
            </div>
          </div>

          <div className="mt-6 text-xs text-white/60">
            <p>
              COPYRIGHT OF ZODIAC GLOBAL GROUP 2025 | ZODIAC GLOBAL GROUP IS A TRADING NAME
              OF ZODIAC GLOBAL ENTERTAINMENT LIMITED IS A COMPANY REGISTERED IN ENGLAND AND
              WALES UNDER COMPANY NO. 10758258. C/O RPGCC, 40 GRACECHURCH STREET, LONDON, ENGLAND, EC3V 0BT | UK VAT NO. GB 258147382
            </p>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <FadeIn>
      <div className="w-full mt-16 select-none pointer-events-none">
          <h1 className="text-[17vw] leading-[0.8] font-bold tracking-tighter text-cream/15 translate-y-[2vw] whitespace-nowrap">
            zodiac global
          </h1>
      </div>
      </FadeIn>
    </footer>
  );
}
