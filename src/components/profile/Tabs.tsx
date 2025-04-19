import React from "react";

const tabs = ["About", "Experience", "Products", "Events", "Reviews"];

export const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("About");

  return (
    <div className="relative flex items-center gap-[40px_96px] text-xl text-[#808080] font-medium whitespace-nowrap tracking-[-0.4px] leading-[1.3] px-3.5 max-md:max-w-full">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`self-stretch z-0 gap-2 my-auto p-2 cursor-pointer ${
            activeTab === tab ? "text-[#6B047C]" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/09ea237dc136eb5d7625d122330b3334d9aaee6c?placeholderIfAbsent=true"
        className="object-contain w-[897px] absolute z-0 min-w-60 bottom-[-3px] -translate-x-2/4 translate-y-[0%] h-0 rounded-[0px_0px_0px_0px] left-2/4 max-md:max-w-full"
      />
    </div>
  );
};
