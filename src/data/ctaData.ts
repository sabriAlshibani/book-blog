import { CTAData } from "./types/cta";

export const ctaData: CTAData = {
  title: "انضم إلى النشرة البريدية",
  description: "احصل على آخر التحديثات والعروض الحصرية مباشرة إلى بريدك.",
  inputs: [
    { placeholder: "أدخل اسمك", type: "text" },
    { placeholder: "أدخل بريدك الإلكتروني", type: "email" },
  ],
  buttons: ["اشترك الآن"],
  gradientFrom: "from-indigo-600",
  gradientTo: "to-purple-500",
};
