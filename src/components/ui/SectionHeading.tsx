"use client";

import React from "react";

interface SectionTitleProps {
  label?: string;
  heading: string;
  highlight?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const headingSizes = {
  h1: "text-3xl md:text-6xl lg:text-7xl font-extrabold",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-2xl md:text-3xl font-bold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg font-semibold",
  h6: "text-base font-medium",
};

export default function SectionTitle({
  label,
  heading,
  highlight,
  align = "center",
  className = "",
  as = "h2",
}: SectionTitleProps) {
  const Tag = as;
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  const renderHeading = () => {
    if (!highlight || !heading.includes(highlight)) {
      return heading;
    }

    const [before, after] = heading.split(highlight);
    return (
      <>
        {before}
        <span className="text-[#5b3df0] font-extrabold">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div className={`mb-8 ${alignmentClass} ${className}`}>
      {label && (
        <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
          {label}
        </div>
      )}
      <Tag
        className={`text-3xl md:text-5xl font-extrabold text-[#1d1d1f] leading-tight tracking-tight`}
      >
        {renderHeading()}
      </Tag>
    </div>
  );
}
