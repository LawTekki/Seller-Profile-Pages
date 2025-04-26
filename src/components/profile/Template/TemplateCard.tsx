import React from "react";
import { Template } from "@/types/template";

interface TemplateCardProps {
  template: Template;
  onEdit: (id: string) => void;
  onBuy: (id: string) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template, onEdit, onBuy }) => {
  return (
    <article className="flex flex-col border box-border bg-white p-2.5 rounded-lg border-solid border-[#F2F2F2]">
      <div className="relative">
        <img
          src={template.imageUrl}
          className="w-full aspect-[4/3] object-cover rounded mb-2.5"
          alt={`${template.title} preview`}
        />
        {template.discountInfo && (
          <div className="absolute bottom-0 left-0 right-0 bg-[#FF4E00] text-white text-xs py-1.5 px-3 text-center font-medium">
            {template.discountInfo}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="text-[#808080] text-[11px] font-medium leading-[13px] uppercase">
          {template.type}
        </div>
        <h3 className="text-[#1A011E] text-base font-medium leading-5 mb-1 truncate">
          {template.title}
        </h3>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[#808080] text-xs font-normal">
            <span>Author:</span>
            <span>File type:</span>
          </div>
          <div className="flex justify-between text-[#1A011E] text-xs font-medium">
            <span className="truncate max-w-[120px]">{template.author}</span>
            <span>{template.fileType}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onEdit(template.id)}
            className="flex-1 border text-[#6B047C] rounded text-sm font-medium leading-[18.2px] text-center cursor-pointer px-4 py-2 border-solid border-[#6B047C] hover:bg-[#6B047C] hover:text-white transition-colors hover:scale-105"
          >
            Edit
          </button>
          <button
            onClick={() => onBuy(template.id)}
            className="flex-1 text-white rounded text-sm font-medium leading-[18.2px] text-center cursor-pointer bg-[#6B047C] px-4 py-2 hover:bg-[#5A036A] transition-colors hover:scale-105"
          >
            Buy for ${template.price}
          </button>
        </div>
      </div>
    </article>
  );
};
