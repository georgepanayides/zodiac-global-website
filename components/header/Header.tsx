"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { IoMegaphoneOutline, IoPeopleOutline } from "react-icons/io5";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
}

const navigationConfig: Record<string, NavItem[]> = {
  home: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    {
      label: "SERVICES",
      dropdown: [
        { label: "Influencer Marketing", href: "/influencer-marketing" },
        { label: "Talent Management", href: "/talent-management" },
      ],
    },
    // { label: "ARTICLES", href: "/articles" },
    { label: "CONTACT", href: "/contact" },
  ],
  talent: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    {
      label: "SERVICES",
      dropdown: [
        { label: "Influencer Marketing", href: "/influencer-marketing" },
        { label: "Talent Management", href: "/talent-management" },
      ],
    },
    { label: "OUR ROSTER", href: "/talent-roster" },
    // { label: "ARTICLES", href: "/articles" },
    { label: "CONTACT", href: "/contact" },
  ],
  influencer: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    {
      label: "SERVICES",
      dropdown: [
        { label: "Influencer Marketing", href: "/influencer-marketing" },
        { label: "Talent Management", href: "/talent-management" },
      ],
    },
    // { label: "ARTICLES", href: "/articles" },
    { label: "CONTACT", href: "/contact" },
  ],
};

export default function Header() {
  const pathname = usePathname();

  // Remount the stateful header UI on route change to ensure menus close
  // without needing effects that synchronously set state.
  return <HeaderInner key={pathname} pathname={pathname} />;
}

function HeaderInner({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Determine header variant based on current path
  let variant: "home" | "talent" | "influencer" = "home";

  if (pathname.startsWith("/talent-management")) {
    variant = "talent";
  } else if (pathname.startsWith("/influencer-marketing")) {
    variant = "influencer";
  }

  const navItems = navigationConfig[variant];

  const getServiceIcon = (href: string) => {
    if (href.startsWith("/influencer-marketing")) return IoMegaphoneOutline;
    if (href.startsWith("/talent-management")) return IoPeopleOutline;
    return null;
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/5">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 relative">
             <div className="w-10 h-10 md:w-12 md:h-12 relative">
              <Image
                src="/logo/zodiacgloballogo.png"
                alt="Zodiac Global Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="relative group cursor-pointer">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white text-sm font-semibold hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className="text-white text-sm font-semibold hover:text-cream transition-colors">
                      {item.label}
                    </button>
                    {item.dropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[240px] p-2 flex flex-col gap-1">
                        {item.dropdown.map((dropItem) => (
                          (() => {
                            const Icon = item.label === "SERVICES" ? getServiceIcon(dropItem.href) : null;
                            return (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="flex items-center gap-3 px-4 py-3 text-white text-sm font-medium hover:bg-white/10 rounded-lg transition-colors whitespace-nowrap text-left"
                          >
                            {Icon ? (
                              <span className="shrink-0 text-white/70" aria-hidden>
                                <Icon size={18} />
                              </span>
                            ) : null}
                            <span className="flex-1">{dropItem.label}</span>
                          </Link>
                            );
                          })()
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden z-50 relative w-10 h-10 flex flex-col items-end justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-cream block"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-cream block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8, width: 32 } : { rotate: 0, y: 0, width: 16 }}
              className="h-0.5 bg-cream block"
            />
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-black pt-24 px-6 md:hidden overflow-hidden h-screen"
              >
                <ul className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <li key={item.label} className="border-b border-white/10 pb-4 last:border-0">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-3xl font-bold text-white block"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div>
                          <button 
                            onClick={() => toggleDropdown(item.label)}
                            className="flex items-center justify-between w-full text-3xl font-bold text-white"
                          >
                            {item.label}
                            <span className={`text-xl transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}>
                                ↓
                            </span>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.label && item.dropdown && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden mt-4 flex flex-col gap-4 pl-4"
                              >
                                {item.dropdown.map((dropItem) => (
                                  <Link
                                    key={dropItem.href}
                                    href={dropItem.href}
                                    className="text-xl text-white/60 block"
                                  >
                                    {dropItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                   <p className="text-white/40 text-sm mb-4">CONTACT</p>
                   <a href="mailto:info@zodiacglobal.com" className="text-xl text-white block mb-2">info@zodiacglobal.com</a>
                </div>

                {/* Bottom Brand Texture */}
                <div className="absolute bottom-5 -left-5">
                  <h1 className="text-[20vw] leading-[0.8] font-bold tracking-tighter text-white/10 text-center whitespace-nowrap select-none pointer-events-none translate-y-8">
                    zodiac global
                  </h1>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}