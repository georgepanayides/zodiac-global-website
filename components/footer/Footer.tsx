import Link from "next/link";
import Tabs from "@/components/ui/tabs/Tabs";
import TalentForm from "@/components/ui/forms/TalentForm";
import BrandForm from "@/components/ui/forms/BrandForm";
import FadeIn from "../motion/FadeIn";

export default function Footer() {
  return (
    <footer className="w-full text-white pt-16 border-t border-cream/25 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col h-full relative">
             {/* Header */}
             <div className="mb-12">
               <span className="text-sm font-mono text-cream-100 mb-6 block tracking-widest uppercase">
                 Get in Touch
               </span>
               <a
                  href="mailto:info@zodiacglobal.com"
                  className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-bold tracking-tight hover:text-cream-100 transition-colors"
                >
                  <span>info@zodiacglobal.com</span>
                   <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-cream-100 group-hover:text-black group-hover:rotate-45 transition-all duration-300">
                     <span className="text-xl">↗</span>
                   </span>
               </a>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {/* Offices */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3 block">
                    DUBAI
                  </span>
                  <p className="text-base text-white/80 font-light leading-relaxed">
                    1306 Concord Tower<br />
                    Media City, Dubai
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3 block">
                    LONDON
                  </span>
                  <p className="text-base text-white/80 font-light leading-relaxed">
                    c/o RPGCC<br />
                    40 Gracechurch Street<br />
                    London, EC3V 0BT
                  </p>
                </div>
              </div>

              {/* Socials - Replaced Icons with Text + Circle Arrow */}
              <div className="space-y-6">
                 <span className="text-xs font-mono uppercase tracking-wider text-white/40 mb-3 block">
                    FOLLOW US
                 </span>
                 <div className="flex flex-col gap-4">
                    {[
                      { name: "INSTAGRAM", href: "https://www.instagram.com/zodiacglobalgroup/" },
                      { name: "TIKTOK", href: "https://www.tiktok.com/@_zodiacglobal?_r=1&_t=ZS-91sdhROEFnA" },
                      { name: "LINKEDIN", href: "https://www.linkedin.com/company/zodiac-global/"}
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between w-full max-w-[200px] border-b border-white/10 pb-2 hover:border-cream-100 hover:pl-2 transition-all duration-300"
                      >
                        <span className="text-sm font-bold tracking-widest">{social.name}</span>
                        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-cream-100 group-hover:text-black group-hover:rotate-45 transition-all duration-300">
                          <span className="text-[10px]">↗</span>
                        </div>
                      </a>
                    ))}
                 </div>
              </div>
            </div>

            {/* Abstract Graphic - Branded Text Ring */}
            <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] opacity-[0.05] pointer-events-none select-none z-0">
               <svg viewBox="0 0 500 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
                  <defs>
                    <path id="textCircle" d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0" />
                  </defs>
                  <text className="text-[42px] font-bold tracking-[0.15em] font-mono uppercase" fill="white">
                    <textPath href="#textCircle" textLength="1256" lengthAdjust="spacing">
                      ZODIAC GLOBAL GROUP • ZODIAC GLOBAL GROUP •
                    </textPath>
                  </text>
                  <circle cx="250" cy="250" r="160" stroke="white" strokeWidth="1" strokeDasharray="4 4" fill="none" className="opacity-30" />
                  <circle cx="250" cy="250" r="240" stroke="white" strokeWidth="1" fill="none" className="opacity-20" />
               </svg>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col pt-8 lg:pt-0">
            <div className="mb-10">
               <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                 Let&apos;s Work Together
               </h3>
               <p className="text-white/50 text-base font-light max-w-md">
                 Tell us about your project or ambition. Select your path below.
               </p>
            </div>
            
            <Tabs 
               tabs={[
                 { id: 'brand', label: 'I AM A BRAND', content: <BrandForm /> },
                 { id: 'talent', label: 'I AM TALENT', content: <TalentForm /> }
               ]}
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-mono uppercase tracking-wider">
           <div>© {new Date().getFullYear()} Zodiac Global. All rights reserved.</div>
           <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
           
        </div>
         {/* Large Brand Text */}
        <FadeIn>
        <div className="w-full mt-8 select-none pointer-events-none pt-8 md:-mb-8 mb-0">
            <h1 className="md:text-[15vw] text-[20vw] -ml-[15px] md:ml-0 leading-[0.8] font-bold tracking-tighter text-white/10 text-center whitespace-nowrap">
              zodiac global
            </h1>
        </div>
        </FadeIn>
      </div>
    </footer>
  );
}
