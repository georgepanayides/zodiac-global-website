import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

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
      label: "TALENT MANAGEMENT",
      dropdown: [
        { label: "Services", href: "/talent-management/services" },
        { label: "Our Work", href: "/talent-management/work" },
      ],
    },
    {
      label: "INFLUENCER MARKETING",
      dropdown: [
        { label: "Services", href: "/influencer-marketing/services" },
        { label: "Our Work", href: "/influencer-marketing/work" },
      ],
    },
    { label: "CONTACT", href: "/contact" },
  ],
  talent: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "OUR SERVICES", href: "/talent-management/services" },
    { label: "OUR ROSTER", href: "/talent-management/roster" },
    { label: "OUR WORK", href: "/talent-management/work" },
    { label: "CONTACT", href: "/talent-management/contact" },
  ],
  influencer: [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "OUR SERVICES", href: "/influencer-marketing/services" },
    { label: "OUR WORK", href: "/influencer-marketing/work" },
    { label: "CONTACT", href: "/influencer-marketing/contact" },
  ],
};

export default async function Header() {
  // Get pathname from headers to determine variant
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  // Determine header variant based on current path
  let variant: "home" | "talent" | "influencer" = "home";

  if (pathname.startsWith("/talent-management")) {
    variant = "talent";
  } else if (pathname.startsWith("/influencer-marketing")) {
    variant = "influencer";
  }

  const navItems = navigationConfig[variant];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-xs bg-black/10 border-b border-white/20 -mb-20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/logo/zodiacgloballogo.png"
                alt="Zodiac Global Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="relative group cursor-pointer">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white text-sm font-semibold hover:text-white/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button className="text-white text-sm font-semibold hover:text-white/80 transition-colors">
                      {item.label}
                    </button>
                    {item.dropdown && (
                      <div className="absolute top-full left-0 mt-2 bg-zodiac border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="block px-6 py-3 text-white text-sm hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg transition-colors"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}