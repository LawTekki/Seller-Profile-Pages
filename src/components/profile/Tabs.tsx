import React from "react";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["About", "Experience", "Products", "Events", "Reviews"];

export const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div
      className="
        flex
        w-full
        max-w-[1000px]
        mx-auto
        mt-[-8px] sm:mt-6
        mb-1 sm:mb-2
        border-b border-[#E6E6E6]
        text-xs sm:text-base md:text-lg
        font-semibold
        tracking-tight
        text-[#808080]
        gap-2 sm:gap-4
        px-2 sm:px-6
      "
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              flex-1
              text-center
              whitespace-nowrap
              py-2 sm:py-2 md:py-3
              ${isActive
                ? "text-[#6B047C] border-b-[5px] border-[#6B047C] rounded-t-lg"
                : "text-[#B9B9B9]"}
              transition-colors duration-150
              focus:outline-none
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
