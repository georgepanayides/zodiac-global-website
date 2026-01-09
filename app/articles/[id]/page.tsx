import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { BLOG_POSTS } from "@/lib/blog-data";
import { IoArrowBack } from "react-icons/io5";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <Link href="/articles" className="inline-flex items-center text-white/60 hover:text-white mb-12 transition-colors">
            <IoArrowBack className="mr-2" />
            Back to Insights
          </Link>
        </FadeIn>

        <article>
          {/* Header */}
          <FadeIn delay={0.1}>
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                 <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/10 rounded-full text-cream-100">
                    {post.category}
                 </span>
                 <span className="text-white/40 text-sm">{post.date}</span>
                 <span className="text-white/40 text-sm">•</span>
                 <span className="text-white/40 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                 <div className="w-10 h-10 rounded-full bg-white/10" /> {/* Avatar Placeholder */}
                 <div>
                    <div className="text-white font-medium text-sm">{post.author}</div>
                    <div className="text-white/40 text-xs">Author</div>
                 </div>
              </div>
            </header>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div className="prose prose-invert prose-lg max-w-none text-white/80 font-light prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cream-100 prose-blockquote:border-cream-100">
               {/* This is a simple implementation. In a real app, you'd likely use a markdown parser. 
                   For this demo, we can dangerouslySetInnerHtml since the content is trusted (from our constant file). 
                   But to be safer/cleaner in Next, I usually just render children or specific components.
                   Since 'content' in data is HTML string: */}
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </FadeIn>
        </article>
      </div>
    </main>
  );
}
