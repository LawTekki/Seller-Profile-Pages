import React from "react";

interface AddEventButtonProps {
  onClick: () => void;
}

export const AddEventButton: React.FC<AddEventButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-[#6B047C] text-white font-medium text-sm px-6 py-2.5 hover:bg-[#5A0369] active:bg-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#6B047C] focus:ring-opacity-50"
    >
      Add new event
    </button>
  );
};
