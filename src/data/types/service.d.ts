import { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  price: string;
  features: string[];
  buttonLabel: string;
  color: {
    icon: string; // e.g., bg-green-500
    price: string; // e.g., text-green-600
    button: string; // e.g., bg-green-500
  };
}
