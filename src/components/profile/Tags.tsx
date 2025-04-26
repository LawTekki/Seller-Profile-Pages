import React, { useState, useEffect } from "react";
import styles from "./Tags.module.css";

interface TagsProps {
  title: string;
  tags: string[];
  editable?: boolean;
  onUpdate?: (tags: string[]) => void;
}

export const Tags: React.FC<TagsProps> = ({ title, tags, editable = true, onUpdate }) => {
  const [tagList, setTagList] = useState(tags);
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState("");

  const handleRemove = (idx: number) => {
    const updated = tagList.filter((_, i) => i !== idx);
    setTagList(updated);
    onUpdate && onUpdate(updated);
  };
  const handleAdd = () => {
    if (input.trim() && !tagList.includes(input.trim())) {
      const updated = [...tagList, input.trim()];
      setTagList(updated);
      setInput("");
      onUpdate && onUpdate(updated);
    }
  };

  // Enhanced: Responsive tag rendering for unlimited tags
  const getExplicitRows = (arr: string[]) => {
    // 4 tags in first row, 3 in second, 2 in third
    return [
      arr.slice(0, 4), // first 4
      arr.slice(4, 7), // next 3
      arr.slice(7, 9), // last 2 (if present)
    ].filter(row => row.length > 0);
  };

  const [isMobile, setIsMobile] = useState(false);
  const rows = isMobile
    ? (() => {
        // fallback: 2 per row for mobile
        const mobileRows = [];
        for (let i = 0; i < tagList.length; i += 2) {
          mobileRows.push(tagList.slice(i, i + 2));
        }
        return mobileRows;
      })()
    : getExplicitRows(tagList);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.tagsCenter}>
      <div className={styles.tagsRowWrap}>
        {/* Label + Edit icon (inline) */}
        <span className={styles.tagsLabel}>
          <span className="flex items-center">
            {title}
            {editable && !editing && (
              <button
                className="ml-1 bg-transparent hover:bg-gray-100 rounded p-1 focus:outline-none"
                onClick={() => setEditing(true)}
                aria-label="Edit tags"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/79e8e73a137781124827e5ab59ebd63b20192040?placeholderIfAbsent=true"
                  alt="Edit icon"
                  className="w-4 h-4 ml-2"
                />
              </button>
            )}
            {editable && editing && (
              <button
                className="ml-1 bg-transparent hover:bg-gray-100 rounded p-1 focus:outline-none"
                onClick={() => setEditing(false)}
                aria-label="Cancel edit"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/79e8e73a137781124827e5ab59ebd63b20192040?placeholderIfAbsent=true"
                  alt="Cancel icon"
                  className="w-4 h-4 ml-2"
                />
              </button>
            )}
          </span>
        </span>
        {/* Tags + Input */}
        <div className={styles.tagsListWrap}>
          {/* Custom rows for desktop, fallback for mobile */}
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-row flex-wrap gap-2 mb-1 md:gap-3 md:mb-0"
            >
              {row.map((tag, idx) => {
                // Calculate correct index in flat tagList
                const flatIdx = rowIdx === 0 ? idx : rowIdx === 1 ? idx + 4 : idx + 7;
                return (
                  <span
                    key={flatIdx}
                    className={styles.tagPill}
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    {tag}
                    {editable && editing && (
                      <button
                        className="ml-2 text-white bg-transparent hover:text-black active:text-black focus:text-black focus:outline-none text-base md:text-lg"
                        onClick={() => handleRemove(flatIdx)}
                        aria-label="Remove tag"
                      >
                        ×
                      </button>
                    )}
                  </span>
                );
              })}
            </div>
          ))}
          {editable && editing && (
            <span className="flex items-center mt-2 md:mt-1 w-full">
              <input
                className="border border-gray-300 rounded-md px-2 py-1 font-normal ml-2 md:ml-0 w-full text-sm md:text-base lg:text-lg"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") handleAdd();
                }}
                placeholder="Add tag"
                style={{ minWidth: 80 }}
              />
              <button
                className="bg-[#6B047C] text-white px-2 py-1 rounded ml-2 md:ml-1 text-sm md:text-base lg:text-lg"
                type="button"
                onClick={() => {
                  handleAdd();
                  setTimeout(() => {
                    const inputEl = document.activeElement as HTMLElement;
                    if (inputEl && inputEl.tagName === 'INPUT') inputEl.blur();
                  }, 0);
                }}
                disabled={!input.trim() || tagList.includes(input.trim())}
              >
                Add
              </button>
              <button
                className="bg-gray-200 text-black px-2 py-1 rounded ml-2 md:ml-1 text-sm md:text-base lg:text-lg"
                onClick={() => {
                  setEditing(false);
                  setInput("");
                }}
              >
                Cancel
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
