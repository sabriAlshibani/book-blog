"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData/blogHomeData";

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <div className="text-center mt-20 text-gray-500">لم يتم العثور على المقال</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-right" dir="rtl">
      <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date} - {post.author}</p>
      <div className="prose max-w-none prose-p:leading-loose prose-ul:rtl prose-li:mb-2" dir="rtl">
        {post.content.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/blog" className="text-purple-600 hover:underline text-sm">← العودة إلى المدونة</Link>
      </div>
    </div>
  );
}
