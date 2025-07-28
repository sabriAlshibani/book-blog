import {
  BookOpen,
  Code,
  Paintbrush,
  ShoppingCart,
  BadgeCheck,
  Globe,
  Megaphone,
  FileText,
} from "lucide-react";
import { MarketCategory, MarketHero, Product } from "./types/market";

// 🟣 Hero Section Data
export const marketHeroData: MarketHero = {
  label: "المتجر",
  heading: "متجر خدمات شفرة وهوية",
  highlight: "شفرة وهوية",
  description:
    "اكتشف خدماتنا المتميزة في التصميم، البرمجة، التسويق الرقمي والمزيد – بأسعار تنافسية وجودة عالية تلبي جميع احتياجاتك.",
};

// 🟢 Categories
export const marketCategories: MarketCategory[] = [
  {
    id: "dev",
    label: "برمجة",
    icon: Code,
  },
  {
    id: "design",
    label: "تصميم",
    icon: Paintbrush,
  },
  {
    id: "education",
    label: "تعليم",
    icon: BookOpen,
  },
  {
    id: "ecommerce",
    label: "تجارة",
    icon: ShoppingCart,
  },
];

// 🟠 Products
export const products: Product[] = [
  {
    id: "1",
    title: "تصميم شعار احترافي",
    category: "branding",
    description: "شعار مميز يعبر عن هوية علامتك التجارية بجودة عالية وإبداع.",
    image: "/images/b-1.jpg",
    price: 150,
    oldPrice: 200,
    discount: 25,
    rating: 4.8,
    reviewsCount: 32,
    features: ["3 خيارات تصميم", "تعديل غير محدود", "تسليم بصيغ متعددة"],
    badge: "الأكثر مبيعًا",
    label: "شعار",
    icon: Paintbrush, // ✅ icon as LucideIcon
    slug: "logo-design",
  categoryId:"div"

  },
  {
    id: "2",
    title: "تصميم هوية بصرية كاملة",
    category: "branding",
    description: "هوية متكاملة تشمل بطاقة العمل، أوراق رسمية، ألوان وخطوط العلامة.",
    image: "/images/b-2.jpg",
    price: 650,
    oldPrice: 900,
    discount: 30,
    rating: 4.9,
    reviewsCount: 18,
    features: ["شعار + هوية", "دليل استخدام", "ملفات جاهزة للطباعة"],
    badge: "عرض خاص",
    label: "هوية",
    icon: BadgeCheck,
    slug: "full-branding",
    categoryId: "design"
  },
  {
    id: "3",
    title: "موقع تعريفي سريع واحترافي",
    category: "development",
    description: "موقع تعريفي متكامل وسريع، مناسب للشركات والمستقلين.",
    image: "/images/b-3.jpg",
    price: 1200,
    rating: 4.7,
    reviewsCount: 22,
    features: ["5 صفحات", "سريع الاستجابة", "متوافق مع محركات البحث"],
    label: "موقع",
    icon: Globe,
    slug: "promo-website",
    categoryId: "education"
  },
  {
    id: "4",
    title: "حملة إعلانات سوشيال ميديا",
    category: "marketing",
    description: "إعداد وتشغيل حملة فعالة على فيسبوك وإنستغرام لتحقيق أهدافك التسويقية.",
    image: "/images/b-4.jpg",
    price: 500,
    rating: 4.6,
    reviewsCount: 16,
    features: ["تصميمات جاهزة", "إعداد إعلانات", "تقارير أداء"],
    label: "إعلانات",
    icon: Megaphone,
    slug: "social-media-ads",
    categoryId: "ecommerce"
  },
  {
    id: "5",
    title: "كتابة محتوى تسويقي مقنع",
    category: "content",
    description: "كتابة نصوص إعلانية وصفحات مبيعات تساعد على رفع التحويلات.",
    image: "/images/b-5.jpg",
    price: 250,
    rating: 4.9,
    reviewsCount: 9,
    features: ["نصوص صفحات", "إعلانات سوشيال", "تدقيق لغوي"],
    label: "محتوى",
    icon: FileText,
    slug: "marketing-copywriting",
    categoryId : "ecommerce"
  },
  {
    id: "6",
    title: "تطوير متجر إلكتروني احترافي",
    category: "development",
    description: "متجر إلكتروني متكامل بخصائص احترافية وتجربة مستخدم سلسة.",
    image: "/images/b-6.jpg",
    price: 3000,
    oldPrice: 3500,
    discount: 15,
    rating: 4.85,
    reviewsCount: 12,
    features: ["دفع إلكتروني", "إدارة المنتجات", "لوحة تحكم سهلة"],
    label: "متجر",
    icon: ShoppingCart,
    slug: "ecommerce-store",
    categoryId : "dev"
  },
];
// data/marketData.ts

export interface MarketItem {
  id: number;
  slug: string;
  title: string;
  rating: number;
  mainImage: string;
  gallery: string[];
  views: number;
  date: string;
  readingTime: number;
  content: string;
}

export const marketItems: MarketItem[] = [
  {
    id: 1,
    slug: "design-website",
    title: "تصميم مواقع إلكترونية",
    rating: 4.8,
    mainImage: "/images/b-1.jpg",
    gallery: [
      "/images/b-1.jpg",
      "/images/b-2.jpg",
      "/images/b-3.jpg",
    ],
    views: 120,
    date: "2025-07-28",
    readingTime: 3,
    content: `نحن نقدم خدمة تصميم مواقع إلكترونية احترافية باستخدام أحدث التقنيات مثل Next.js و Tailwind CSS لضمان تجربة مستخدم سلسة ومتجاوبة على جميع الأجهزة.`,
  },
  {
    id: 2,
    slug: "seo-marketing",
    title: "تحسين محركات البحث SEO",
    rating: 4.5,
    mainImage: "/images/b-2.jpg",
    gallery: [
      "/images/b-2.jpg",
      "/images/b-4.jpg",
    ],
    views: 95,
    date: "2025-07-28",
    readingTime: 2,
    content: `نساعدك على رفع ترتيب موقعك في نتائج البحث من خلال تحليل الكلمات المفتاحية، تحسين بنية الموقع، وبناء روابط خلفية فعالة.`,
  },
  // يمكنك إضافة المزيد بنفس الشكل
];
