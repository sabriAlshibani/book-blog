interface SectionTitleProps {
  label?: string;
  heading: string;
  highlight?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
}

const headingSizes = {
  h1: "text-4xl md:text-6xl lg:text-7xl font-extrabold",
  h2: "text-3xl md:text-5xl font-bold",
  h3: "text-2xl md:text-4xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
};

export default function SectionTitle({
  label,
  heading,
  highlight,
  align = "left",
  className = "",
  as = "h2",
  gradient = false,
}: SectionTitleProps) {
  const Tag = as;
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  const textColor = gradient
    ? "bg-gradient-to-r from-indigo-700 via-stone-300 to-gray-400 bg-clip-text text-transparent"
    : "text-gray-800 dark:text-white";

  const renderHeading = () => {
    if (!highlight || !heading.includes(highlight)) {
      return heading;
    }

    const [before, after] = heading.split(highlight);
    return (
      <>
        {before}
        <span
          className={
            gradient
              ? "text-transparent bg-gradient-to-r from-indigo-400 via-stone-200 to-gray-400 bg-clip-text"
              : "text-indigo-600 dark:text-indigo-400"
          }
        >
          {highlight}
        </span>
        {after}
      </>
    );
  };

  return (
    <div className={`mb-10 ${alignmentClass} ${className}`}>
      {label && (
        <p className="text-sm text-indigo-500 uppercase tracking-wider mb-2 font-medium">
          {label}
        </p>
      )}

      <Tag
        className={`
          ${headingSizes[as]}
          ${textColor}
          font-serif
          tracking-tight leading-snug
        `}
      >
        {renderHeading()}
      </Tag>
    </div>
  );
}
