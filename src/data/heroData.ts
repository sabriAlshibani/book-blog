import { Paintbrush, Zap, Code } from "lucide-react";
import { HeroData } from "./types/hero";

export const heroData: HeroData = {
  heading: "شفرة وهوية",
  highlight: "البرمجة",
  description:
    "نقدم حلولاً متكاملة في تطوير مواقع الويب، تصميم الهويات البصرية، والسوشيال ميديا بأسعار تنافسية ودقة عالية",
  button: {
    label: "استكشف خدماتنا",
    href: "#services", // adjust to your actual section ID
  },
  icons: [
    {
      icon: Zap,
      title: "الإبداع",
    },
    {
      icon: Paintbrush,
      title: "التصميم",
    },
    {
      icon: Code,
      title: "البرمجة",
    },
  ],
};
