import CaseStudyCarousel, { CaseStudyItem } from "@/components/ui/carousels/CaseStudyCarousel";
import { CDN_VIDEOS } from "@/lib/constants";

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "loreal",
    title: "Justfooddxb x Ariel",
    description: "Authentic creator content showcasing real results in an everyday setting.",
    image: "/images/HQB06728.jpg",
    video: CDN_VIDEOS[0],
    stats: [
      { value: "12.3M", label: "VIEWS" },
      { value: "8.5%", label: "ENGAGEMENT" },
      { value: "500K", label: "LIKES" },
      { value: "15K", label: "SAVES" },
      { value: "100+", label: "POSTS" },
      { value: "4.2x", label: "ROAS" },
    ]
  },
  {
    id: "nike",
    title: "Kaory x Saudi",
    description: "A community-first approach activating micro-influencers across major cities.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2687&auto=format&fit=crop",
    video: CDN_VIDEOS[1],
    stats: [
      { value: "5.2M", label: "VIEWS" },
      { value: "8.9%", label: "ENGAGEMENT" },
      { value: "450K", label: "LIKES" },
      { value: "12K", label: "SAVES" },
      { value: "250+", label: "POSTS" },
      { value: "3.5x", label: "ROAS" },
    ]
  },
  {
    id: "samsung",
    title: "Abby Clancy x Uber",
    description: "Showcasing lifestyle integration with premium aesthetic and detailed storytelling.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2687&auto=format&fit=crop",
    video: CDN_VIDEOS[2],
    stats: [
      { value: "25M", label: "VIEWS" },
      { value: "15%", label: "CTR" },
      { value: "2.1M", label: "CLICKS" },
      { value: "45", label: "CREATORS" },
      { value: "100%", label: "SENTIMENT" },
      { value: "Top 1", label: "TRENDING" },
    ]
  },
  {
    id: "spotify",
    title: "Amara x PLT",
    description: "Global activation of fashion influencers sharing their personal style edits.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=2574&auto=format&fit=crop",
    video: CDN_VIDEOS[3],
    stats: [
      { value: "50M+", label: "VIEWS" },
      { value: "1.2M", label: "SHARES" },
      { value: "850K", label: "NEW USERS" },
      { value: "#1", label: "APP STORE" },
      { value: "Global", label: "TRENDING" },
      { value: "200+", label: "CREATORS" },
    ]
  },
  {
    id: "adidas",
    title: "Mike Thurston x BetterHelp",
    description: "Reconnecting with audiences through honest conversations about mental health.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2940&auto=format&fit=crop",
    video: CDN_VIDEOS[4],
    stats: [
      { value: "18M", label: "VIEWS" },
      { value: "9.2%", label: "ENGAGEMENT" },
      { value: "750K", label: "LIKES" },
      { value: "15K", label: "SAVES" },
      { value: "120", label: "CREATORS" },
      { value: "4.1x", label: "ROAS" },
    ]
  },
  {
    id: "chanel",
    title: "Justfooddxb x Keeta",
    description: "Launching the new delivery service with high-tier food influencers.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop",
    video: CDN_VIDEOS[5],
    stats: [
      { value: "8M", label: "VIEWS" },
      { value: "11%", label: "CTR" },
      { value: "400K", label: "CLICKS" },
      { value: "25", label: "CREATORS" },
      { value: "98%", label: "SENTIMENT" },
      { value: "Sold Out", label: "RESULT" },
    ]
  }
];

export default function CaseStudy() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-16 tracking-tight">
          Selected Case Studies
        </h2>
        <CaseStudyCarousel items={CASE_STUDIES} />
      </div>
    </section>
  );
}