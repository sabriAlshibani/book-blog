
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
  align = "left",
  className = "",
  as = "h2",
  gradient = false,
}: SectionTitleProps) {
  const Tag = as;
  const alignmentClass = align === "center" ? "text-center" : "text-left";
  const textColor = gradient
    ? "bg-gradient-to-r from-purple-800 via-white to-gray-400 bg-clip-text text-transparent"
    : "text-color";

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
              ? "text-transparent bg-gradient-to-r from-purple-400 via-white to-gray-300 bg-clip-text"
              : "text-primary"
          }
        >
          {highlight}
        </span>
        {after}
      </>
    );
  };

  return (
    <div className={`mb-8 ${alignmentClass} ${className}`}>

        {label && (
          <p className="text-sm text-primary uppercase tracking-widest mb-2">
            {label}
          </p>
        )}
        <Tag
          className={`
            ${headingSizes[as]}
            ${textColor}
            tracking-wide leading-tight my-4
          `}
        >
          {renderHeading()}
        </Tag>
    </div>
  );
}
