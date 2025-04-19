import React from "react";

interface BannerProps {
  profileImage: string;
  name: string;
  country: string;
  countryFlag: string;
  hourlyRate: string;
}

export const Banner: React.FC<BannerProps> = ({
  profileImage,
  name,
  country,
  countryFlag,
  hourlyRate,
}) => {
  return (
    <>
      <div className="bg-white w-full overflow-hidden max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7a5b018cdc404864e7b280c9442739804aeba9ac?placeholderIfAbsent=true"
          className="aspect-[5.43] object-contain w-full max-md:max-w-full"
        />
      </div>
      <div className="z-10 flex mt-[-42px] gap-[40px_158px] font-medium flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 gap-3 leading-[1.3]">
          <img
            src={profileImage}
            className="aspect-[1] object-contain w-[145px] shrink-0 rounded-[81px]"
          />
          <div className="flex flex-col items-stretch">
            <div className="text-[#1A011E] text-2xl tracking-[-0.48px] font-bold">
              {name}
            </div>
            <div className="flex items-center gap-2 text-xl whitespace-nowrap tracking-[-0.4px] mt-2">
              <div className="text-[#1A011E] self-stretch my-auto">
                Country:
              </div>
              <div className="self-stretch flex items-center gap-2 text-[#666] my-auto">
                <img
                  src={countryFlag}
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">{country}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-60 gap-[40px_75px] text-xl text-[#1A011E] tracking-[-0.4px] leading-[1.3]">
          <div className="flex flex-col items-stretch whitespace-nowrap justify-center">
            <div>Availability:</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/1d4020d9728e60e36e8d3f99599058a219e9f9bf?placeholderIfAbsent=true" className="aspect-[1] object-contain w-8 mt-2" />
          </div>
          <div className="flex flex-col items-stretch justify-center">
            <div>Hourly rate</div>
            <div className="mt-2">{hourlyRate}</div>
          </div>
        </div>
        <div className="self-stretch bg-white gap-2.5 text-base text-[#6B047C] tracking-[-0.32px] p-4 rounded-lg">
          View public profile
        </div>
      </div>
    </>
  );
};
