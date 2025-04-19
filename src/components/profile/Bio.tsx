import React from "react";

interface BioProps {
  content: string;
}

export const Bio: React.FC<BioProps> = ({ content }) => {
  return (
    <div className="flex items-stretch font-medium mt-10 max-md:pr-5">
      <div className="mr-[-856px] max-md:max-w-full">
        <div className="text-[#808080] text-xl leading-[1.3] tracking-[-0.4px] max-md:max-w-full">
          Bio
        </div>
        <div className="text-[#1A011E] text-base leading-6 tracking-[-0.32px] mt-3 max-md:max-w-full">
          {content}
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/79e8e73a137781124827e5ab59ebd63b20192040?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 shrink-0" />
    </div>
  );
};
