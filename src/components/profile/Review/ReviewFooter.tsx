import React from "react";

interface ReviewFooterProps {
  productName: string;
}

export const ReviewFooter: React.FC<ReviewFooterProps> = ({ productName }) => {
  return (
    <>
      <div className="border bg-[#E6E6E6] min-h-px w-0 mt-2 border-[rgba(230,230,230,1)] border-solid" />
      <div className="flex flex-col items-stretch text-base tracking-[-0.32px] justify-center mt-2">
        <div className="text-[#808080]">Review for</div>
        <div className="text-[#1A011E] mt-1">{productName}</div>
      </div>
    </>
  );
};
