import { notFound } from "next/navigation";
import { products } from "@/data/marketData";
import { Star, ShoppingCart, MessageCircle, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/types/market";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionHeading";

interface Props {
  params: { slug: string };
}

export default function ProductPage({ params }: Props) {
  const product: Product | undefined = products.find(
    (p) => p.slug === params.slug
  );

  if (!product) return notFound();

  return (
    <section
      className="py-20 px-4 bg-[#f9f9fb] min-h-screen text-right"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title + Back */}
        <div className="flex items-center justify-between">
          <SectionTitle heading="تفاصيل المنتج" highlight={product.title} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Info */}
          <div className="space-y-6">
            {product.label && (
              <h2 className="text-sm font-medium text-blue-600">
                {product.label}
              </h2>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 text-yellow-500 text-sm">
              <Star fill="currentColor" className="w-5 h-5" />
              <span>
                {product.rating} ({product.reviewsCount} تقييم)
              </span>
            </div>

            <p className="text-gray-600 leading-loose">{product.description}</p>

            {/* Price */}
            <div className="flex items-center gap-4 text-lg font-semibold">
              {product.oldPrice && (
                <span className="text-sm line-through text-gray-400">
                  {product.oldPrice} ر.س
                </span>
              )}
              <span className="text-2xl text-blue-700">
                {product.price} ر.س
              </span>
              {product.discount && (
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  خصم {product.discount}%
                </span>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                يشمل المنتج:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {product.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={10} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6">
  {/* CTA Buttons */}
  <div className="flex flex-wrap gap-4">
    <Button className="px-6 py-3 text-base gap-2">
      <ShoppingCart className="w-5 h-5" />
      إضافة إلى السلة
    </Button>
    <Link href="#contact">
      <Button variant="secondary" className="px-6 py-3 text-base gap-2">
        <MessageCircle className="w-5 h-5" />
        تواصل معنا
      </Button>
    </Link>
  </div>

  {/* Back Button */}
  <Link href="/market">
    <Button variant="outline" className="text-sm gap-2">
      <ArrowRight className="w-4 h-4" />
      رجوع
    </Button>
  </Link>
</div>

          </div>

          {/* Product Image */}
          <div className="w-full flex justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
