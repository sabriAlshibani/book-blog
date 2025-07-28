"use client";

import { notFound } from "next/navigation";
import { products } from "@/data/marketData";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, MoveRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionHeading";
import BlogActions from "@/components/blog/BlogActions";
import DescriptionLis from "@/components/ui/DescriptionList";

export default async function MarketProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <section className="w-full mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-l from-blue-100 via-blue-200 to-white">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row-reverse">
        {/* Image side */}
        <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto">
          <Image
            src={product.image}
            fill
            className="object-cover"
            alt={product.title}
          />
          <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 text-sm font-medium">
            <span className="bg-green-100 text-green-900 px-3 py-1 rounded-full">
              {product.category}
            </span>
            {product.discount && (
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                خصم {product.discount}%
              </span>
            )}
          </div>
        </div>

        {/* Content side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 space-y-6 text-right">
          {/* Title */}
          <SectionTitle
            heading={product.title}
            highlight={product.badge || ""}
            as="h2"
            align="right"
          />

          {/* Actions */}
          <BlogActions
            initialLikes={product.reviewsCount}
            initialComments={product.reviewsCount}
          />

          {/* Features */}
          <DescriptionLis
            title={
              <SectionTitle
                heading="ما يشمله المنتج"
                as="h5"
                align="right"
                className="mt-2"
              />
            }
            icon={Check}
            features={product.features}
          />

          {/* Description */}
          <article className="text-gray-800 leading-8">
            <SectionTitle heading="الوصف" as="h3" align="right" />
            <p className="mt-2 text-pretty">
              {product.content || "لا يوجد وصف مفصل لهذا المنتج حاليًا."}
            </p>
          </article>
          <div className="flex flex-wrap gap-4 mt-6 justify-start">
            {/* Add to Cart Button */}
            <Button
            variant="primary"
              size="md"
              className=""
            >
              <span className="ml-2">إضافة إلى السلة</span>
              <ShoppingCart size={18} />
            </Button>

            {/* Contact Us Button */}
            <Button
              variant="outline"
              size="md"
              className="border border-gray-300 text-black hover:bg-gray-100"
            >
              تواصل معنا
            </Button>
          </div>

          {/* Back button */}
          <div className="mt-4 self-start lg:self-end">
            <Link href="/market">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <MoveRight size={14} className="text-gray-600" />
                الرجوع للمتجر
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
