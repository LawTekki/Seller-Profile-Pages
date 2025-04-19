import React from "react";

interface TagsProps {
  title: string;
  tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ title, tags }) => {
  return (
    <div className="relative flex font-medium mt-[26px] max-md:max-w-full">
      <div className="text-[#808080] text-xl leading-[1.3] tracking-[-0.4px] z-0">
        {title}
      </div>
      <div className="z-0 flex min-w-60 items-center gap-2 text-base text-white tracking-[-0.32px] flex-wrap w-[470px] max-md:max-w-full">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="self-stretch bg-[#6B047C] gap-2.5 my-auto p-2 rounded-3xl"
          >
            {tag}
          </div>
        ))}
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/79e8e73a137781124827e5ab59ebd63b20192040?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 absolute z-0 shrink-0 h-6 left-36 top-px"
      />
    </div>
  );
};
