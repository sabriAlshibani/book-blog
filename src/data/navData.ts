import { NavData } from "./types/nav";

const navData: NavData = {
  logo: {
    src: "/logo.svg",
    alt: "BookBlog Logo",
  },
  navMenu: [
    { href: "#home", label: "Home" },
    { href: "#books", label: "Books" },
    { href: "#articles", label: "Articles" },
    { href: "#summaries", label: "Summaries" },
    { href: "#quotes", label: "Quotes" },
  ],
  btn: {
    href: "#contact",
    label: "Get in Touch",
  },
};

export default navData;
