import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData/blogHomeData";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionHeading";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-right" dir="rtl">
      <div className="flex justify-start mb-6">
        <Link href="/blog">
          <Button variant="outline" className="gap-2 text-sm">
            <ArrowRight className="w-4 h-4" />
            الرجوع للمدونة
          </Button>
        </Link>
      </div>

      <SectionTitle heading={post.title} className="mb-6" />

      <div className="text-sm text-gray-500 mb-4">
        {post.date} · {post.readingTime} دقيقة قراءة · {post.views} مشاهدة
      </div>

      {post.image && (
        <div className="relative w-full h-64 md:h-96 mb-6 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      <article className="prose prose-lg prose-slate rtl text-gray-800 max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </section>
  );
}
