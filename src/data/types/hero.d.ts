import { LucideIcon } from "lucide-react";

export interface HeroData {
  heading: string;
  highlight?: string;
  description: string;
  button: btnItem;
  icons: IconItem[];
}
interface btnItem {
  label?:string;
  href?:string;
}
interface IconItem {
  icon?:LucideIcon;
  title?:string;
}