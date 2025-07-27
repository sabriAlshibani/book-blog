"use client";

import SectionTitle from "../ui/SectionHeading";
import Input from "../ui/Input";
import { marketHeroData } from "@/data/marketData";

export default function HeroMarket() {
  return (
    <section className="h-screen bg-gradient-to-tr from-[#f0f4ff] to-[#eaf0ff] flex items-center justify-center text-center" dir="rtl">
      <div className="max-w-3xl px-4 mx-auto">
        <SectionTitle
          heading={marketHeroData.heading}
          highlight={marketHeroData.highlight}
          label={marketHeroData.label}
          align="center"
        />
        <p className="mt-4 text-lg text-gray-600">{marketHeroData.description}</p>
        <div className="mt-6 max-w-md mx-auto">
          <Input placeholder="ابحث عن خدمة..." className="text-right" />
        </div>
      </div>
    </section>
  );
}
