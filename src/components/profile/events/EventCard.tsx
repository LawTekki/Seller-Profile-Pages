import React from "react";

interface EventCardProps {
  image: string;
  status: string;
  title: string;
  date: string;
  time: string;
  onPreview: () => void;
  onRegister: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  image,
  status,
  title,
  date,
  time,
  onPreview,
  onRegister,
}) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="text-xs text-gray-500 uppercase tracking-wide">
          {status}
        </div>
        <h3 className="text-lg font-semibold mt-2 text-gray-900 single-line-ellipsis">
          {title}
        </h3>
        
        <div className="flex justify-between mt-4">
          <div>
            <div className="text-xs text-gray-500">Date</div>
            <div className="text-sm font-medium">{date}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Time</div>
            <div className="text-sm font-medium">{time}</div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={onPreview}
            className="flex-1 py-2.5 px-4 border border-[#6B047C] text-[#6B047C] rounded hover:bg-[#6B047C] hover:text-white active:bg-[#4A0259] active:border-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#6B047C] focus:ring-opacity-50 text-sm font-medium"
          >
            Preview
          </button>
          <button
            onClick={onRegister}
            className="flex-1 py-2.5 px-4 bg-[#6B047C] text-white rounded hover:bg-[#5A0369] active:bg-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#6B047C] focus:ring-opacity-50 text-sm font-medium"
          >
            Register
          </button>
        </div>
      </div>
    </article>
  );
};
