"use client";

import { servicesData } from "@/data/servicesData";
import Reveal from "../ui/Reval";
import ServiceCard from "./ServiceCard";
import CTA from "../ui/CTA";
import { ctaData } from "@/data/ctaData";
import SectionTitle from "../ui/SectionHeading";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 md:px-8 bg-[#f8f9ff]">
      <div className="max-w-6xl mx-auto">
              <div className="mb-12">
        <Reveal>
          <SectionTitle
            heading="خدماتنا المتميزة"
            highlight="المتميزة"
            align="center"
            as="h2"
          />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الرقمية لتلبية جميع احتياجاتك التقنية والإبداعية
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {servicesData.map((service, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 max-w-full mx-auto">
        <Reveal delay={0.3}>
          <CTA data={ctaData} maxWidth="max-w-6xl" />
        </Reveal>
      </div>
      </div>

    </section>
  );
}
