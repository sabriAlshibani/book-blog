"use client";

import Input from "../ui/Input";
import SectionTitle from "../ui/SectionHeading";
import { Search } from "lucide-react";

export default function BlogHero() {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-[#f0f4ff] via-white to-[#f8f9ff] text-gray-900"
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          heading="مدونة شفرة وهوية"
          highlight="شفرة وهوية"
          align="center"
          as="h1"
        />

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          اكتشف أحدث المقالات والنصائح في عالم البرمجة والتصميم والتسويق الرقمي
        </p>

        <div className="mt-8 max-w-md mx-auto relative">
          <Input
            type="text"
            placeholder="ابحث في المقالات..."
            className="pr-10 text-right placeholder:text-gray-400"
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </section>
  );
}
