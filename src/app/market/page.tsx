"use client";

import { useState } from "react";
import { ProductCard } from "@/components/market/MarketCard";
import { Categories } from "@/components/ui/Categories";
import { marketCategories, products } from "@/data/marketData";
import { List, LayoutGrid } from "lucide-react";
import HeroPage from "@/components/ui/HeroPages";
import Reveal from "@/components/ui/Reval";

export default function MarketPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter((product) => {
    const matchCategory = filter === "all" || product.categoryId === filter;
    const matchSearch =
      product.title.includes(searchTerm) ||
      product.description.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <HeroPage
        heading="استعرض منتجاتنا الرقمية"
        highlight="منتجاتنا"
        description="اكتشف أدوات وتقنيات مميزة تساعدك في مجالات البرمجة، التصميم، والتسويق."
        placeholder="ابحث في المنتجات..."
        onSearch={(val) => setSearchTerm(val)}
      />

      <section id="market" className="py-16 px-4 md:px-8 bg-[#f8f9ff]">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* 🟦 Category Tabs */}
          <Reveal y={30} delay={0.1}>
            <Categories Categories={marketCategories} onSelect={setFilter} />
          </Reveal>

          {/* 🔁 View Toggle */}
          <Reveal y={20} delay={0.2}>
            <div className="flex justify-end items-center gap-2">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-md border ${
                  view === "grid"
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-gray-600 hover:bg-blue-100"
                }`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-md border ${
                  view === "list"
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-gray-600 hover:bg-blue-100"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </Reveal>

          {/* 🟨 Product Layout */}
          <div
            className={`${
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }`}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Reveal key={product.id} y={30} delay={index * 0.05}>
                  <ProductCard product={product} view={view} />
                </Reveal>
              ))
            ) : (
              <Reveal y={20} delay={0.1}>
                <p className="text-center text-gray-500 col-span-full">
                  لا توجد منتجات مطابقة.
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
