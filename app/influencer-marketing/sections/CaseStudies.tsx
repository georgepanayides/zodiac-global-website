import CaseStudyCarousel, { CaseStudyItem } from "@/components/ui/carousels/CaseStudyCarousel";

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "loreal",
    title: "L'Oréal Paris",
    description: "L'Oréal wanted to increase awareness and consideration of their new skin-luminosity foundation among women aged 18-34. The campaign needed authentic creator content that showcased real results in an everyday setting.",
    image: "/images/HQB06728.jpg", // Placeholder
    stats: [
      { value: "12.3M", label: "VIEWS" },
      { value: "12.3M", label: "VIEWS" },
      { value: "12.3M", label: "VIEWS" },
      { value: "12.3M", label: "VIEWS" },
      { value: "12.3M", label: "VIEWS" },
      { value: "12.3M", label: "VIEWS" },
    ]
  },
  {
    id: "nike",
    title: "Nike Running",
    description: "Nike aimed to launch their new Pegasus runner with a community-first approach. We activated 50 micro-influencers across 5 major cities to create a groundswell of authentic running content.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2687&auto=format&fit=crop", // Placeholder
    stats: [
      { value: "5.2M", label: "REACH" },
      { value: "8.9%", label: "ENGAGEMENT" },
      { value: "450K", label: "LIKES" },
      { value: "12K", label: "SAVES" },
      { value: "250+", label: "POSTS" },
      { value: "3.5x", label: "ROAS" },
    ]
  },
  {
    id: "samsung",
    title: "Samsung Galaxy",
    description: "To promote the new Galaxy Z Flip, we partnered with fashion and lifestyle creators to showcase the phone as the ultimate accessory. The campaign focused on the unique form factor and camera capabilities.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2687&auto=format&fit=crop", // Placeholder
    stats: [
      { value: "25M", label: "IMPRESSIONS" },
      { value: "15%", label: "CTR" },
      { value: "2.1M", label: "CLICKS" },
      { value: "45", label: "CREATORS" },
      { value: "100%", label: "SENTIMENT" },
      { value: "Top 1", label: "TRENDING" },
    ]
  },
  {
    id: "spotify",
    title: "Spotify Wrapped",
    description: "For the annual Wrapped campaign, we coordinated a global activation of music influencers to share their personal year in review, encouraging their followers to do the same.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2574&auto=format&fit=crop", // Placeholder
    stats: [
      { value: "50M+", label: "REACH" },
      { value: "1.2M", label: "SHARES" },
      { value: "850K", label: "NEW USERS" },
      { value: "#1", label: "APP STORE" },
      { value: "Global", label: "TRENDING" },
      { value: "200+", label: "CREATORS" },
    ]
  }
];

export default function CaseStudy() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-6">
        <h2>Content Styles We Execute</h2>
        <CaseStudyCarousel items={CASE_STUDIES} />
      </div>
    </section>
  );
}