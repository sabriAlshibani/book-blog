import { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  reviewsCount: number;
  features: string[];
  label?: string;
  icon: LucideIcon; // ✅ FIXED: icon is now a component, not string
  badge?: string;
  specs?: string[]; // optional specs list
  categoryId?:string;
}

export interface MarketHero {
  label: string;
  heading: string;
  highlight?: string;
  description: string;
}

export interface MarketCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}
