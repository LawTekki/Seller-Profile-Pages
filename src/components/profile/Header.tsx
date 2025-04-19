import React from "react";

interface HeaderProps {
  name: string;
}

export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:items-stretch">
      <div className="w-[30%] max-md:w-full max-md:ml-0">
        <div className="flex grow items-stretch gap-5 leading-[1.3] justify-between max-md:mt-10">
          <div className="text-[#1A011E] text-[32px] font-semibold">Logo</div>
          <div className="text-[#808080] text-xl font-medium tracking-[-0.4px] mt-[13px]">
            Welcome, <span className="text-[#1A011E]">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
