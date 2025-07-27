import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/types/market";

interface ProductCardProps {
  product: Product;
  view?: "grid" | "list";
}

export function ProductCard({ product, view = "grid" }: ProductCardProps) {
  const isList = view === "list";

  return (
    <Link
      href={`/market/${product.slug}`}
      dir="rtl"
      className={`bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg group ${
        isList ? "flex flex-col md:flex-row" : "flex flex-col"
      }`}
    >
      <div
        className={`relative ${
          isList ? "w-full md:w-1/3 h-52 md:h-auto" : "w-full h-56"
        }`}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-t-2xl md:rounded-none md:rounded-r-2xl group-hover:scale-105 transition"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between text-right">
        <div>
          <h3 className="text-lg font-bold mb-1">{product.title}</h3>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2 flex-wrap gap-y-2">
          <div className="text-blue-700 font-semibold text-lg">
            {product.price.toFixed(2)} رس
            {product.oldPrice && (
              <span className="line-through ml-2 text-sm text-gray-400">
                {product.oldPrice.toFixed(2)} رس
              </span>
            )}
          </div>
          <div className="text-sm text-yellow-500">
            ⭐ {product.rating} ({product.reviewsCount})
          </div>
        </div>
      </div>
    </Link>
  );
}
