import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Eye, User2, Clock, MessageCircle } from "lucide-react";
import { BlogPost } from "@/data/types/blog";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden group">
      <div className="relative w-full md:w-1/3 h-52 md:h-auto">
        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4 text-right flex flex-col justify-between">
        <div>
          <span className="text-xs text-purple-600">{post.category}</span>
          <h3 className="text-lg font-bold mt-1">{post.title}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-4">
          <span className="flex items-center gap-1"><CalendarDays size={14} /> {post.date}</span>
          <span className="flex items-center gap-1"><User2 size={14} /> {post.author}</span>
          <span className="flex items-center gap-1"><Eye size={14} /> {post.views}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readingTime} دقيقة</span>
          <span className="flex items-center gap-1"><MessageCircle size={14} /> {post.comments}</span>
        </div>
      </div>
    </Link>
  );
}
