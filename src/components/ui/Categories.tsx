"use client";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface CategoryProps {
  Categories?: Category[];
  onSelect: (id: string) => void;
}

export function Categories({ Categories = [], onSelect }: CategoryProps) {
  const [active, setActive] = useState("all");

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {Categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setActive(cat.id);
              onSelect(cat.id);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition
              ${isActive ? "bg-purple-600 text-white border-purple-600" : "bg-white text-gray-600 border-gray-300 hover:bg-blue-100"}
            `}
          >
            <Icon size={16} className={isActive ? "text-white" : "text-blue-600"} />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
