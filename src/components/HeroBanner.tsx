import heroData from "@/data/heroData";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionHeading";

export default function HeroBanner() {
  const { heading, highlight, description, button } = heroData;

  return (
    <section className="w-full px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle
          heading={heading}
          highlight={highlight}
          align="center"
          as="h1"
          className="mb-6"
        />
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          {description}
        </p>
        <Button>
          <a href={button.href}>{button.label}</a>
        </Button>
      </div>
    </section>
  );
}
