import React from "react";
import { ReviewHeader } from "./ReviewHeader";
import { ReviewContent } from "./ReviewContent";
import { ReviewFooter } from "./ReviewFooter";

interface ReviewCardProps {
  userImage: string;
  username: string;
  rating: number;
  title: string;
  content: string;
  productName: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  userImage,
  username,
  rating,
  title,
  content,
  productName,
}) => {
  return (
    <article className="bg-white rounded-lg p-6 border border-gray-100">
      <div className="flex flex-col gap-4">
        <ReviewHeader
          userImage={userImage}
          username={username}
          rating={rating}
        />
        <ReviewContent title={title} content={content} />
      </div>
      <ReviewFooter productName={productName} />
    </article>
  );
};
