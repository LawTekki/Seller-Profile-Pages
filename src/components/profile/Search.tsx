import React from "react";

export const Search = () => {
  return (
    <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex w-full items-stretch gap-[40px_68px] flex-wrap max-md:max-w-full max-md:mt-10">
        <div className="items-center bg-neutral-50 flex gap-2.5 text-xs text-[#CCC] font-medium whitespace-nowrap tracking-[-0.24px] leading-[1.3] grow shrink basis-auto my-auto px-2 py-2.5 rounded-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9af6aefaf4f43fa778da23d790841883962172fb?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch my-auto">Search</div>
        </div>
        <div className="flex items-center gap-8 grow shrink basis-auto">
          <div className="self-stretch flex items-center gap-4 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/8c4abca0ffb24d1db46c5e12611f0ba1891c99a5?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/223e0e68f3d0fbcae82f9d1a6da7d9a9acb992cb?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/0e3e81f49673001f85dfba73457774a0c75caf12?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-lg"
            />
          </div>
          <div className="justify-center items-center self-stretch flex gap-2 text-base text-[#6B047C] font-medium tracking-[-0.32px] my-auto p-2 rounded-lg">
            <div className="self-stretch my-auto">Quick actions</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ee09e017ea06a0d21b47df4f0bc8e7b32a4452d2?placeholderIfAbsent=true"
              className="aspect-[2] object-contain w-8 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
