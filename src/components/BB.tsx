"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { CalendarDays, Eye, User2, Clock, Star } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blogData/blogHomeData";

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center text-gray-600 mt-20">المقال غير موجود</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-right" dir="rtl">
      {/* صورة المقال */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg transition-transform duration-500">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
        />
      </div>

      {/* عنوان ومعلومات */}
      <h1 className="mt-6 text-3xl font-bold text-gray-900">{post.title}</h1>
      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1"><CalendarDays size={16} /> {post.date}</span>
        <span className="flex items-center gap-1"><User2 size={16} /> {post.author}</span>
        <span className="flex items-center gap-1"><Eye size={16} /> {post.views} مشاهدة</span>
        <span className="flex items-center gap-1"><Clock size={16} /> {post.readingTime} دقائق</span>
      </div>

      {/* التقييم */}
      <div className="flex items-center gap-1 mt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
        <span className="text-xs text-gray-500">(٤.٥/٥)</span>
      </div>

      {/* محتوى تجريبي */}
      <div className="mt-6 text-gray-700 leading-loose space-y-4">
        <p>
          في هذا المقال، نستعرض أفضل الممارسات لتطوير مواقع الويب الحديثة باستخدام أدوات وتقنيات حديثة تساعد على تحسين الأداء وتجربة المستخدم.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>استخدام أطر حديثة مثل React و Next.js.</li>
          <li>تحسين الأداء باستخدام الصور المضغوطة وتقنيات التحميل الكسول.</li>
          <li>ضبط تحسين محركات البحث SEO.</li>
          <li>اعتماد التصميم المتجاوب والمتوافق مع جميع الأجهزة.</li>
        </ul>
        <p>
          اتّباع هذه الأساليب يساعد على بناء موقع حديث وسريع، ويزيد من تفاعل المستخدمين وتحسين الترتيب في محركات البحث.
        </p>
      </div>

      {/* التعليقات */}
      <div className="mt-12 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">التعليقات</h3>
        <form className="space-y-2 mb-6">
          <input placeholder="اسمك" className="w-full border rounded-md p-2 text-sm" />
          <textarea placeholder="اكتب تعليقك..." rows={3} className="w-full border rounded-md p-2 text-sm" />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            نشر التعليق
          </button>
        </form>

        {/* تعليقات تجريبية */}
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
            <p className="font-semibold">محمد علي</p>
            <p className="text-sm">مقال رائع ومفيد جدًا، شكرًا لك!</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
            <p className="font-semibold">سارة أحمد</p>
            <p className="text-sm">أحببت الأسلوب وأتمنى المزيد من هذه المواضيع.</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/blog" className="text-purple-600 hover:underline text-sm">
          ← العودة إلى المدونة
        </Link>
      </div>
    </div>
  );
}
