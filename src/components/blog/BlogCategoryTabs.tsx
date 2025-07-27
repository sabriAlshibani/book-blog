"use client";

import { blogCategories } from "@/data/blogData/blogHomeData";
import { useState } from "react";
interface categoryProps {
  onSelect: (id: string) => void
}
export default function CategoryTabs({ onSelect }: categoryProps) {
  const [active, setActive] = useState("all");

  return (
    <div className="flex gap-2 flex-wrap justify-center my-6" dir="rtl">
      {blogCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
            setActive(cat.id);
            onSelect(cat.id);
          }}
          className={`px-4 py-1 rounded-full border ${
            active === cat.id ? "bg-purple-600 text-white" : "text-gray-600 border-gray-300"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
