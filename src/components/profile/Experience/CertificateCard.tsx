import * as React from "react";

interface CertificateCardProps {
  title: string;
  dateIssued: string;
  fileSize: string;
  onView?: () => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  dateIssued,
  fileSize,
  onView,
}) => {
  return (
    <div className="flex-1 min-w-[250px] max-w-[300px]">
      <div className="mb-2">
        <div className="text-[#1A011E] text-base font-medium tracking-[-0.32px]">
          {title}
        </div>
        <div className="text-[#808080] text-sm leading-[1.3] tracking-[-0.28px]">
          <span className="font-medium">Date Issued:</span> {dateIssued}
        </div>
      </div>
      
      <button
        onClick={onView}
        className="w-full flex items-center gap-3 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 p-3 group border border-gray-200 hover:border-[#6B047C]/20 hover:shadow-md"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bc4a9654ed6675761c451986fa5eeb71e2a0e94"
          alt=""
          className="w-8 h-8 transition-transform duration-200 group-hover:scale-110"
        />
        
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 text-[#1A011E]">
            <span className="font-medium">Certificate</span>
            <span className="text-[#808080]">•</span>
            <span className="text-[#808080] text-sm">{fileSize}</span>
          </div>
          <div className="text-xs text-[#808080] uppercase tracking-wider">
            PDF FILE
          </div>
        </div>
      </button>
    </div>
  );
};
