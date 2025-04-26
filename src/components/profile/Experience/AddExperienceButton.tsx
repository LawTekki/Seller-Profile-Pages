import * as React from "react";

export const AddExperienceButton: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-[#6B047C] hover:bg-[#5a0368] z-10 gap-2.5 text-sm text-white tracking-[-0.28px] leading-[1.3] px-4 py-2 transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-100"
    >
      Add a new experience
    </button>
  );
};
