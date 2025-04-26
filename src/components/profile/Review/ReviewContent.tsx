import React from "react";

interface ReviewContentProps {
  title: string;
  content: string;
}

export const ReviewContent: React.FC<ReviewContentProps> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-900 font-medium">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </div>
  );
};
