import { notFound } from "next/navigation";
import ProfileHero from "./sections/ProfileHero";
import ProfileStats from "./sections/ProfileStats";
import RecentWork from "./sections/RecentWork";
import ProfileCTA from "./sections/ProfileCTA";

// Mock Data Store (In a real app, this would be a database or CMS fetch)
const talentDatabase = [
  {
    slug: "alex-rivera",
    name: "Alex Rivera",
    handle: "@arivera",
    category: "Lifestyle & Fashion",
    image: "/images/HQB06728.jpg",
    bio: "Alex Rivera is a leading voice in modern lifestyle and fashion, known for his minimalist aesthetic and authentic storytelling. With a global audience, he bridges the gap between high fashion and everyday style.",
    stats: [
      { label: "Followers", value: "2.4M", subtext: "Across all platforms" },
      { label: "Engagement", value: "4.8%", subtext: "Average rate" },
      { label: "Reach", value: "12M+", subtext: "Monthly impressions" },
      { label: "Markets", value: "Global", subtext: "US, UK, EU" },
    ],
    recentWork: [
      { id: 1, title: "Summer Collection Launch", brand: "Zara Man", image: "/images/HQB06762.jpg", type: "Campaign" as const },
      { id: 2, title: "Paris Fashion Week Diary", brand: "Vogue", image: "/images/HQB06855.jpg", type: "Video" as const },
      { id: 3, title: "Sustainable Living Series", brand: "Selfridges", image: "/images/HQB06873.jpg", type: "Campaign" as const },
      { id: 4, title: "Morning Routine", brand: "Aesop", image: "/images/HQB06728.jpg", type: "Video" as const },
    ]
  },
  {
    slug: "sarah-chen",
    name: "Sarah Chen",
    handle: "@sarahc_tech",
    category: "Tech & Gaming",
    image: "/images/HQB06762.jpg",
    bio: "Sarah Chen demystifies technology for the masses. From deep-dive reviews to future-tech commentary, she is the go-to source for what's next in the digital world.",
    stats: [
      { label: "Followers", value: "1.8M", subtext: "YouTube & Twitter" },
      { label: "Views", value: "45M", subtext: "Annual views" },
      { label: "Retention", value: "12m", subtext: "Avg watch time" },
      { label: "Demographic", value: "18-34", subtext: "Tech enthusiasts" },
    ],
    recentWork: [
      { id: 1, title: "The Future of AI", brand: "Google", image: "/images/HQB06855.jpg", type: "Video" as const },
      { id: 2, title: "Gaming Setup Tour", brand: "Alienware", image: "/images/HQB06873.jpg", type: "Video" as const },
      { id: 3, title: "Tech Week Keynote", brand: "Samsung", image: "/images/HQB06728.jpg", type: "Campaign" as const },
      { id: 4, title: "Developer Conference", brand: "Microsoft", image: "/images/HQB06762.jpg", type: "Image" as const },
    ]
  },
  // Fallback for other IDs in the grid to avoid 404s during demo
  {
    slug: "default",
    name: "Talent Profile",
    handle: "@talent",
    category: "Creator",
    image: "/images/HQB06855.jpg",
    bio: "This is a demo profile. In a production environment, this data would be fetched from a CMS based on the specific talent ID or slug.",
    stats: [
      { label: "Followers", value: "1M+", subtext: "Total audience" },
      { label: "Engagement", value: "5.2%", subtext: "High interaction" },
      { label: "Reach", value: "5M", subtext: "Monthly reach" },
      { label: "Conversion", value: "3.8%", subtext: "Click-through rate" },
    ],
    recentWork: [
      { id: 1, title: "Brand Campaign", brand: "Major Label", image: "/images/HQB06728.jpg", type: "Campaign" as const },
      { id: 2, title: "Product Launch", brand: "Tech Giant", image: "/images/HQB06762.jpg", type: "Video" as const },
    ]
  }
];

export async function generateStaticParams() {
  return talentDatabase.map((talent) => ({
    slug: talent.slug,
  }));
}

export default async function TalentProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Simple lookup logic
  let talent = talentDatabase.find((t) => t.slug === slug);
  
  // Fallback for demo purposes if slug doesn't match exact mock data
  if (!talent) {
    // In a real app, this would be notFound();
    // For this demo, we'll use the default profile but override the name if we can parse it from the slug
    const nameFromSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    talent = {
      ...talentDatabase.find(t => t.slug === "default")!,
      name: nameFromSlug,
      handle: `@${slug.replace('-', '')}`,
    };
  }

  return (
    <main className="bg-black min-h-screen">
      <ProfileHero 
        name={talent.name}
        handle={talent.handle}
        category={talent.category}
        bio={talent.bio}
        image={talent.image}
      />
      <ProfileStats stats={talent.stats} />
      <RecentWork work={talent.recentWork} />
      <ProfileCTA />
    </main>
  );
}
