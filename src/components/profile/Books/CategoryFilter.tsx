import React from "react";

export type Category = "Books" | "Software" | "Templates" | "Courses";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories: Category[] = ["Books", "Software", "Templates", "Courses"];

  return (
    <nav
      className="flex gap-2 bg-[#F2F2F2] p-1 rounded-lg overflow-x-auto whitespace-nowrap w-auto max-w-[420px] mb-2 mt-[-10px] max-sm:gap-1 max-sm:w-full max-sm:max-w-full"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded text-[#808080] font-medium leading-6 cursor-pointer px-3 py-1 flex-shrink-0 min-w-0 max-w-none overflow-hidden max-sm:text-xs max-sm:font-normal max-sm:px-2 max-sm:py-1 ${
            selectedCategory === category ? "bg-white" : "hover:bg-white/50"
          }`}
        >
          <span className="block w-full">{category}</span>
        </button>
      ))}
      <style>{`
        nav::-webkit-scrollbar { display: none; }
      `}</style>
    </nav>
  );
};
