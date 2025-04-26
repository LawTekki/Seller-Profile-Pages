import React from "react";
import { Software } from "../../../types/software";
import { softwareMouseImage } from "../../../assets/software-mouse";

interface SoftwareCardProps {
  software: Software;
  onEdit: (id: string) => void;
  onBuy: (id: string) => void;
}

export const SoftwareCard: React.FC<SoftwareCardProps> = ({ software, onEdit, onBuy }) => {
  return (
    <article className="flex flex-col border box-border bg-white rounded-lg border-solid border-[#F2F2F2] shadow-sm">
      <div className="relative w-full aspect-[4/3] bg-[#F8F8F8] rounded-t-lg overflow-hidden">
        <img
          src={software.imageUrl || softwareMouseImage}
          className="w-full h-full object-contain p-3"
          alt={`${software.title} cover`}
        />
      </div>
      <div className="flex flex-col p-3">
        <div className="text-[#808080] text-[10px] font-medium uppercase tracking-wide mb-1">
          {software.type}
        </div>
        <h3 className="text-[#1A011E] text-base font-medium leading-tight mb-2 truncate" title={software.title}>
          {software.title}
        </h3>
        <div className="flex flex-col gap-0.5 mb-3">
          <div className="flex justify-between text-[#808080] text-xs">
            <span>Owner:</span>
            <span>Version:</span>
          </div>
          <div className="flex justify-between text-[#1A011E] text-xs font-semibold">
            <span className="truncate max-w-[120px]" title={software.author}>{software.author}</span>
            <span>{software.version}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(software.id)}
            className="flex-1 border text-[#6B047C] rounded text-sm font-medium text-center cursor-pointer px-4 py-2 border-solid border-[#6B047C] hover:bg-[#6B047C] hover:text-white transition-all duration-200 hover:scale-105"
          >
            Edit
          </button>
          <button
            onClick={() => onBuy(software.id)}
            className="flex-1 text-white rounded text-sm font-medium text-center cursor-pointer bg-[#6B047C] px-4 py-2 hover:bg-[#5A036A] transition-all duration-200 hover:scale-105"
          >
            Buy for ${software.price}
          </button>
        </div>
      </div>
    </article>
  );
};
