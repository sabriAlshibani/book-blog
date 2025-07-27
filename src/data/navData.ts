import { Blocks, Home, LayoutPanelTop, Newspaper, ShoppingCart, ToolCase, UserSearch } from "lucide-react";
import { NavData } from "./types/nav";
import { metaBlogData } from "./meta";

const navData: NavData = {
  logo: {
    src: metaBlogData.title,
    alt: "BookBlog Logo",
  },
  navMenu: [
    { href: "./", label: "الرئيسية",icon:Home },
    { href: "./market", label: "المتجر",icon:ShoppingCart },
    { href: "./blog", label: "المدونة",icon:Newspaper },
    { href: "#summaries", label: "قوالب جاهزة",icon:LayoutPanelTop },
    { href: "#quotes", label: "الكورسات",icon:Blocks },
    { href: "#quotes", label: "الأدوات ",icon:ToolCase },
    { href: "#quotes", label: "تواصل معنا",icon:UserSearch },
  ],
  btn: {
    href: "#contact",
    label: "Get in Touch",
  },
};

export default navData;
