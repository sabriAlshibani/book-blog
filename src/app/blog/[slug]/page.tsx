import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData/blogHomeData";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock7, MessageCircle, MoveRight, UserPen } from "lucide-react";
import SectionTitle from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import BlogActions from "@/components/blog/BlogActions";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <section className="w-full mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-l from-blue-100 via-blue-200 to-white">
      <div className="container max-w-screen-lg mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={post.image}
            fill
            className="object-cover"
            alt="صورة المقال"
          />
        </div>

        {/* Post content */}
        <div className="flex flex-col gap-6 mt-6 py-6 px-4 sm:px-8">
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
            <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full hover:bg-blue-900 hover:text-white transition">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <UserPen size={16} /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock7 size={16} /> {post.readingTime} دقائق
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={16} /> {post.comments} تعليق
            </span>
          </div>

          {/* Title */}
          <SectionTitle
            heading={post.title}
            highlight={post.highlight}
            as="h2"
            align="right"
          />

          {/* Interactive section */}
          <BlogActions
            initialLikes={post.like}
            initialComments={post.comments}
          />

          {/* Content */}
          <article className="flex flex-col gap-4 mt-4 text-gray-800 leading-8">
            <SectionTitle heading={post.excerpt} as="h3" />
            <p className="text-pretty">{post.content}</p>
          </article>

          {/* Back button */}
          <div className="mt-4">
            <Button variant="outline" size="sm">
              <Link href="../blog" className="flex items-center gap-2">
                <MoveRight size={14} className="text-gray-600" />
                الرجوع للمدونة
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
