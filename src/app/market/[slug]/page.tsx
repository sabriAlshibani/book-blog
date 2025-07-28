'use client';

import { notFound } from "next/navigation";
import { products } from "@/data/marketData";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, MoveRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionHeading";
import BlogActions from "@/components/blog/BlogActions";

export default async function MarketProductPage({
  params,
}: {
  params:Promise<{slug:string}>;
}) {
  const slug = (await params).slug
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  // Dummy content for each product based on its slug
  const contentMap: Record<string, string> = {
    'logo-design': `احصل على تصميم شعار فريد يعبر عن جوهر علامتك التجارية. نعمل على تقديم ثلاث خيارات إبداعية قابلة للتعديل الكامل بما يناسب ذوقك واحتياجاتك.`,
    'full-branding': `نمنح علامتك هوية بصرية متكاملة تتضمن الشعار، بطاقة العمل، الملفات الرسمية، مع توجيهات استخدام للهوية بطريقة احترافية.`,
    'promo-website': `موقع تعريفي سريع الاستجابة ومتوافق مع محركات البحث، مصمم ليعكس نشاطك التجاري أو الشخصي بشكل احترافي وسلس.`,
    'social-media-ads': `ندير لك حملة تسويقية فعالة وموجهة على منصات التواصل الاجتماعي، بدءًا من تصميم الإعلانات حتى تحليل النتائج لتحقيق أهدافك.`,
    'marketing-copywriting': `كتابة نصوص تسويقية مميزة لرفع نسب التحويلات، تشمل صفحات الهبوط، إعلانات سوشيال، ونصوص المبيعات بطريقة إبداعية.`,
    'ecommerce-store': `نصمم ونطور متجر إلكتروني متكامل مع بوابات دفع، لوحة تحكم، وإمكانية إدارة المنتجات بسهولة لتوسيع تجارتك عبر الإنترنت.`,
  };

  return (
    <section className="w-full mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-l from-blue-100 via-blue-200 to-white">
      <div className="container max-w-screen-lg mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={product.image}
            fill
            className="object-cover"
            alt={product.title}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 mt-6 py-6 px-4 sm:px-8">
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
            <span className="bg-green-100 text-green-900 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <span className="flex items-center gap-1">
              <ShoppingCart size={16} /> {product.label}
            </span>
            <span className="text-red-600 font-semibold">
              {product.discount ? `خصم ${product.discount}%` : ''}
            </span>
          </div>

          {/* Title */}
          <SectionTitle
            heading={product.title}
            highlight={product.badge || ''}
            as="h2"
            align="right"
          />

          {/* Actions */}
          <BlogActions initialLikes={product.reviewsCount} initialComments={product.reviewsCount} />

          {/* Features */}
          <div className="mt-4 text-sm text-gray-700">
            <ul className="list-disc pr-6">
              {product.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <article className="flex flex-col gap-4 mt-4 text-gray-800 leading-8">
            <SectionTitle heading={product.description} as="h3" />
            <p className="text-pretty">
              {contentMap[product.slug] || "لا يوجد وصف مفصل لهذا المنتج حاليًا."}
            </p>
          </article>

          {/* Back button */}
          <div className="mt-4">
            <Button variant="outline" size="sm">
              <Link href="/market" className="flex items-center gap-2">
                <MoveRight size={14} className="text-gray-600" />
                الرجوع للمتجر
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}