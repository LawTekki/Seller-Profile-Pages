import React from "react";

export const Video = () => {
  return (
    <div className="w-[897px] max-w-full overflow-hidden text-sm text-white font-medium tracking-[-0.28px] leading-[1.3] rounded-lg">
      <div className="flex flex-col relative min-h-[364px] w-full pl-20 pr-4 pt-[17px] pb-[158px] max-md:max-w-full max-md:pl-5 max-md:pb-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/2462c91d9fe2e9f528bb2158d02a93fc96a98cb2?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative justify-center items-center flex gap-2.5 p-2 rounded-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e5cf1325dbdd366ffd159182f6cdc4c5e49567c8?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch my-auto">Change video</div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/5ed830f8b3178afb25e6a24096af7a910baded9e?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-12 self-center mt-[107px] -mb-8 max-md:mt-10 max-md:mb-2.5"
        />
      </div>
    </div>
  );
};
