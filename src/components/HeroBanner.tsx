"use client";

import { heroData } from "@/data/heroData";
import Reveal from "./ui/Reval";
import IconCircle from "./ui/Icon";
import Button from "./ui/Button";

export default function HeroSection() {
  const { heading, highlight, description, button, icons } = heroData;

  return (
    <section className="relative overflow-hidden text-center py-20 px-4 md:px-10 bg-gradient-to-br from-[#f3f4ff] to-white">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Heading */}
        <Reveal y={-20}>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 leading-tight">
            {heading}{" "}
            {highlight && (
              <span className="text-blue-600">{highlight}</span>
            )}{" "}
            مع <span className="text-pink-500">الإبداع</span>
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.2}>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </Reveal>

        {/* Icons */}
        <Reveal delay={0.4}>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {icons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-sm"
              >
                <IconCircle
                  icon={item.icon}
                  size={28}
                  tooltip={item.title}
                  withBg
                  rounded="full"
                />
                <span className="text-gray-700 font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.6}>
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:brightness-110">
              {button.label}
            </Button>
            <Button variant="outline" className="rounded-full border-gray-300">
              تواصل معنا
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
