"use client";

import BlogPostCard from "@/components/blog/BlogCard";
import { Categories } from "@/components/ui/Categories";
import HeroPage from "@/components/ui/HeroPages";
import { blogCategories, blogPosts } from "@/data/blogData/blogHomeData";
import { section } from "framer-motion/client";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory = filter === "all" || post.categoryId === filter;
    const matchSearch =
      post.title.includes(searchTerm) ||
      post.author.includes(searchTerm) ||
      post.content.includes(searchTerm) ||
      post.excerpt.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col space-y-7">
      <HeroPage
        heading="مدونة شفرة وهوية"
        highlight="شفرة وهوية"
        description="اكتشف أحدث المقالات والنصائح في عالم البرمجة والتصميم والتسويق الرقمي"
        placeholder="ابحث في المقالات..."
        onSearch={(val) => setSearchTerm(val)}
      />
            <section id="market" className="py-16 px-4 md:px-8 bg-[#f8f9ff]">


      <Categories Categories={blogCategories} onSelect={setFilter} />

      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* View Toggle */}
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md border ${
              view === "grid"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-600 hover:bg-blue-100"
            }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md border ${
              view === "list"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-600 hover:bg-blue-100"
            }`}
          >
            <List size={18} />
          </button>
        </div>

        {/* Blog Posts */}
        <div
          className={`${
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }`}
        >
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} view={view}/>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
