"use client";

import { useState } from "react";
import BlogPostCard from "@/components/blog/BlogCard";
import { Categories } from "@/components/ui/Categories";
import HeroPage from "@/components/ui/HeroPages";
import { blogCategories, blogPosts } from "@/data/blogData/blogHomeData";
import { LayoutGrid, List } from "lucide-react";
import Reveal from "@/components/ui/Reval";

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
    <div className="flex flex-col space-y-10">
        <HeroPage
          heading="مدونة شفرة وهوية"
          highlight="شفرة وهوية"
          description="اكتشف أحدث المقالات والنصائح في عالم البرمجة والتصميم والتسويق الرقمي"
          placeholder="ابحث في المقالات..."
          onSearch={(val) => setSearchTerm(val)}
        />

      <section id="blog-section" className="bg-[#f9fafc] py-16 px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="max-w-7xl mx-auto">
          <Reveal delay={0.2}>
            <Categories Categories={blogCategories} onSelect={setFilter} />
          </Reveal>
        </div>

        {/* View Toggle & Posts */}
        <div className="max-w-7xl mx-auto mt-8 space-y-8">
          <Reveal delay={0.3}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">
                النتائج: {filteredPosts.length}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                  className={`p-2 rounded-md border transition ${
                    view === "grid"
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-600 hover:bg-purple-100"
                  }`}
                >
                  <LayoutGrid size={18} />
                </button>
                <button
                  onClick={() => setView("list")}
                  aria-label="List view"
                  className={`p-2 rounded-md border transition ${
                    view === "list"
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-600 hover:bg-purple-100"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Blog Posts */}
          <div
            className={`${
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-6"
            }`}
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <Reveal key={post.id} delay={index * 0.1}>
                  <BlogPostCard post={post} view={view} />
                </Reveal>
              ))
            ) : (
              <Reveal delay={0.2}>
                <p className="text-center text-gray-500 py-12 col-span-full">
                  لا توجد نتائج تطابق بحثك.
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
