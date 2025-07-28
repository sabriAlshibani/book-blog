"use client";

import { useState } from "react";
import { Heart, Share2, Star, MessageCircle } from "lucide-react";
import SectionTitle from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function BlogActions({
  initialLikes = 0,
  initialComments = 0,
}: {
  initialLikes?: number;
  initialComments?: number;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [userRating, setUserRating] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleRate = (i: number) => {
    setUserRating(i + 1);
  };

  const handleComment = () => {
    setComments((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-6 items-center">
        <span className="flex items-center gap-2 text-sm">
          <Heart
            size={24}
            onClick={handleLike}
            className={`cursor-pointer transition ${
              liked ? "text-red-500 fill-red-500" : "text-gray-600"
            }`}
            stroke="currentColor"
          />
          {likes} تفاعل
        </span>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-amber-300"
              fill={i < userRating ? "currentColor" : "none"}
              stroke="currentColor"
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" onClick={handleLike}>
          <Heart
            size={20}
            className={`transition ${
              liked ? "text-red-500 fill-red-500" : "text-gray-600"
            }`}
          />
          إعجاب
        </Button>
        <Button variant="outline" onClick={handleComment}>
          <MessageCircle size={20} className="text-gray-600" />
          تعليق ({comments})
        </Button>
        <Button variant="outline">
          <Share2 size={20} className="text-gray-600" />
          مشاركة
        </Button>
      </div>

      <div className="flex flex-col gap-3 p-6 bg-gray-100 rounded-2xl">
        <SectionTitle heading="قيم هذا المقال" as="h4" align="right" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              onClick={() => handleRate(i)}
              className={`cursor-pointer transition ${
                i < userRating ? "text-yellow-500" : "text-gray-400"
              }`}
              fill={i < userRating ? "currentColor" : "none"}
              stroke="currentColor"
            />
          ))}
        </div>
        {userRating > 0 && (
          <p className="text-sm text-gray-500 mt-1">
            تم التقييم بـ {userRating} نجوم
          </p>
        )}
      </div>
    </div>
  );
}
