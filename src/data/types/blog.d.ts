export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  highlight?:string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  views: number;
  readingTime: number;
  comments: number;
  category: string;
  categoryId: string;
  stars:number;
  like?:number;
}

import { LucideIcon } from "lucide-react";

export interface BlogCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}

