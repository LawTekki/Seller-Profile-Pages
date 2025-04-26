import React, { useState } from "react";
import styles from "./Bio.module.css";

interface BioProps {
  content?: string;
  onUpdate?: (content: string) => void;
}

export const Bio: React.FC<BioProps> = ({
  content = `I was blown away by the exceptional quality and clarity of the 'LegalShield' document drafting software! As a solo\npractitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a\ngame-changer As a solo practitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow.\nhas been a game-changer`,
  onUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(content);
  const [tempBio, setTempBio] = useState(content);

  const handleSave = () => {
    setBio(tempBio);
    setEditing(false);
    onUpdate && onUpdate(tempBio);
  };

  const handleCancel = () => {
    setTempBio(bio);
    setEditing(false);
  };

  return (
    <div className={styles.bioCenter}>
      <div className="w-full flex flex-col gap-2 mt-8 max-w-[880px] mx-auto px-0">
        {/* Header with Bio label and edit icon */}
        <div className="flex items-center gap-2">
          <span className="text-[#808080] text-xl font-semibold leading-tight">Bio</span>
          {!editing && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/79e8e73a137781124827e5ab59ebd63b20192040?placeholderIfAbsent=true"
              className="w-6 h-6 cursor-pointer"
              alt="Edit bio icon"
              onClick={() => setEditing(true)}
            />
          )}
        </div>

        {/* Content display / edit overlay */}
        <div className="relative w-full max-w-[1100px]">
          <span
            className={
              styles.bioText +
              (editing ? " invisible" : "")
            }
          >
            {bio}
          </span>
          {editing && (
            <textarea
              className="absolute inset-0 w-full h-full border-2 border-[#6B047C] rounded-md p-2 text-base leading-relaxed font-normal box-border resize-none overflow-hidden bg-white"
              value={tempBio}
              onChange={(e) => setTempBio(e.target.value)}
            />
          )}
        </div>

        {/* Action buttons */}
        {editing && (
          <div className="flex gap-2 mt-2">
            <button
              className="bg-[#6B047C] text-white px-4 py-1 rounded"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-200 text-black px-4 py-1 rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
