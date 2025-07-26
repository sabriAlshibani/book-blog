import {
  Share2,
  PenTool,
  Globe,
  LayoutDashboard,
  Palette,
  Smartphone,
} from "lucide-react";
import { Service } from "./types/service";

export const servicesData: Service[] = [
  {
    icon: Share2,
    title: "تصاميم السوشيال ميديا",
    price: "ابتداءً من 200 ريال",
    features: ["تصاميم إبداعية", "محتوى احترافي", "هوية بصرية"],
    buttonLabel: "اطلب الخدمة",
    color: {
      icon: "bg-green-500",
      price: "text-green-600",
      button: "bg-green-500",
    },
  },
  {
    icon: PenTool,
    title: "الهوية البصرية",
    price: "ابتداءً من 500 ريال",
    features: ["شعار احترافي", "هوية متكاملة", "دليل استخدام الهوية"],
    buttonLabel: "اطلب الخدمة",
    color: {
      icon: "bg-pink-500",
      price: "text-pink-600",
      button: "bg-pink-500",
    },
  },
  {
    icon: Globe,
    title: "تطوير مواقع الويب",
    price: "ابتداءً من 1000 ريال",
    features: ["موقع احترافي", "متجاوب مع جميع الأجهزة", "لوحة تحكم سهلة"],
    buttonLabel: "اطلب الخدمة",
    color: {
      icon: "bg-blue-500",
      price: "text-blue-600",
      button: "bg-blue-500",
    },
  },
  {
    icon: LayoutDashboard,
    title: "حلول مخصصة",
    price: "حسب المشروع",
    features: ["تحليل احتياجات", "تطوير خاص", "دعم فني شامل"],
    buttonLabel: "اطلب الخدمة",
    color: {
      icon: "bg-yellow-500",
      price: "text-yellow-600",
      button: "bg-yellow-500",
    },
  },
  {
    icon: Palette,
    title: "تصميم UI/UX",
    price: "ابتداءً من 800 ريال",
    features: ["تصاميم جذابة", "تجربة مستخدم متميزة", "توافق تام"],
    buttonLabel: "اطلب الخدمة",
    color: {
      icon: "bg-purple-500",
      price: "text-purple-600",
      button: "bg-purple-500",
    },
  },
  {
    icon: Smartphone,
    title: "تطبيقات الجوال",
    price: "ابتداءً من 3000 ريال",
    features: ["iOS & Android", "واجهة استخدام جذابة", "أداء عالي"],
    buttonLabel: "اطلب الخدمة",
    color: {
      icon: "bg-red-500",
      price: "text-red-600",
      button: "bg-red-500",
    },
  },
];
