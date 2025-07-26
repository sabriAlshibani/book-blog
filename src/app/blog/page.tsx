"use client";

import BlogPostCard from "@/components/bog/BlogCard";
import CategoryTabs from "@/components/bog/BlogCategoryTabs";
import BlogHero from "@/components/bog/BlogHero";
import { blogPosts } from "@/data/blogData/blogHomeData";
import { useState } from "react";


export default function BlogPage() {
  const [filter, setFilter] = useState("all");

  const filteredPosts = filter === "all"
    ? blogPosts
    : blogPosts.filter((post) => post.categoryId === filter);

  return (
    <div>
      <BlogHero />
      <CategoryTabs onSelect={setFilter} />
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {filteredPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
