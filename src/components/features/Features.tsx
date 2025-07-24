"use client";

import { featureData } from "@/data/featuresData";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <SectionHeading
            heading="Why Read With Us?"
            highlight="Read"
            align="center"
          />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Explore the key reasons readers love our blog — from expert reviews to book discovery.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
