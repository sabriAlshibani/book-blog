import { LucideIcon } from "lucide-react";

export interface NavData {
  logo: {
    src?: string;
    alt?: string;
  };
  navMenu: NavItem[];
  btn: {
    href: string;
    label: string;
  };
}

export interface NavItem {
  href: string;
  label: string;
  icon?:LucideIcon;
}
