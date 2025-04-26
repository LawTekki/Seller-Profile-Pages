import * as React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  imageUrl?: string;
  onEdit?: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  description,
  onEdit,
}) => {
  return (
    <article className="relative flex w-full flex-col max-md:max-w-full">
      <div className="flex items-start">
        <div className="w-[173px] max-w-full">
          <div className="flex items-center gap-2 text-[#1A011E]">
            <h3 className="text-xl leading-[1.3] tracking-[-0.4px] font-bold">
              {title}
            </h3>
            <button 
              onClick={onEdit}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Edit experience"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/e3ebdb78a99200607e0aa3ba8481fb70b23e7021"
                alt=""
                className="w-5 h-5"
              />
            </button>
          </div>
          <div className="text-base tracking-[-0.32px]">{company}</div>
          <div className="text-[#808080] text-sm leading-[1.3] tracking-[-0.28px] mt-1">
            {date}
          </div>
        </div>
      </div>

      <div className="text-[#1A011E] text-base leading-6 tracking-[-0.32px] mt-4 space-y-2">
        {description.split("\n").map((line, index) => (
          <p key={index} className="relative pl-6">
            <span className="absolute left-0 text-[#6B047C] font-medium">{index + 1}.</span>
            {line}
          </p>
        ))}
      </div>
    </article>
  );
};
