"use client";

import { ReactNode } from "react";
import Input from "../ui/Input";
import SectionTitle from "../ui/SectionHeading";
import { Search } from "lucide-react";
import Reval from "./Reval";

interface HeroSectionProps {
  heading: string; 
  highlight?: string;
  description?: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
  children?: ReactNode;
}

export default function HeroPage({
  heading,
  highlight,
  description,
  placeholder = "ابحث...",
  onSearch,
  children,
}: HeroSectionProps) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center px-4 bg-gradient-to-br from-[#f0f4ff] via-white to-[#f8f9ff] text-gray-900">
 <Reval y={-20}>
       <div className="max-w-3xl mx-auto">
   <SectionTitle
  heading={heading}
  highlight={highlight}
  align="center"
  as="h1"
/>


        {description && (
          <p className="mt-4 text-gray-600 text-base md:text-lg">{description}</p>
        )}

        <div className="mt-8 max-w-md mx-auto relative">
          <Input
            type="text"
            placeholder={placeholder}
            className="pr-10 text-right placeholder:text-gray-400"
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>

        {children && <div className="mt-6">{children}</div>}
      </div>
 </Reval>
    </section>
  );
}
