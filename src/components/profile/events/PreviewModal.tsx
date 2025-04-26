import React, { useState } from "react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    date: string;
    time: string;
    image: string;
    description: string;
    status: string;
  };
  onUpdate: (updatedEvent: {
    title: string;
    date: string;
    time: string;
    description: string;
  }) => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  event,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    title: event.title,
    date: event.date,
    time: event.time,
    description: event.description,
  });

  const handleSave = () => {
    onUpdate(editedData);
    setIsEditing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <span className="text-sm text-[#6B047C] font-medium uppercase tracking-wide">
              {event.status}
            </span>
            {isEditing ? (
              <input
                type="text"
                value={editedData.title}
                onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
              />
            ) : (
              <h2 className="text-2xl font-semibold mt-1">{event.title}</h2>
            )}
          </div>

          <div className="flex gap-8 mb-6">
            <div>
              <h3 className="text-sm text-gray-500 font-medium">Date</h3>
              {isEditing ? (
                <input
                  type="date"
                  value={editedData.date}
                  onChange={(e) => setEditedData({ ...editedData, date: e.target.value })}
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
                />
              ) : (
                <p className="text-gray-900">{event.date}</p>
              )}
            </div>
            <div>
              <h3 className="text-sm text-gray-500 font-medium">Time</h3>
              {isEditing ? (
                <input
                  type="time"
                  value={editedData.time}
                  onChange={(e) => setEditedData({ ...editedData, time: e.target.value })}
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
                />
              ) : (
                <p className="text-gray-900">{event.time}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm text-gray-500 font-medium mb-2">Description</h3>
            {isEditing ? (
              <textarea
                value={editedData.description}
                onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C] resize-none"
              />
            ) : (
              <p className="text-gray-700 whitespace-pre-wrap">{event.description}</p>
            )}
          </div>

          <div className="flex justify-end gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditedData({
                      title: event.title,
                      date: event.date,
                      time: event.time,
                      description: event.description,
                    });
                  }}
                  className="px-6 py-2.5 border border-[#6B047C] text-[#6B047C] rounded hover:bg-[#6B047C] hover:text-white active:bg-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 bg-[#6B047C] text-white rounded hover:bg-[#5A0369] active:bg-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2.5 border border-[#6B047C] text-[#6B047C] rounded hover:bg-[#6B047C] hover:text-white active:bg-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150"
                >
                  Edit
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#6B047C] text-white rounded hover:bg-[#5A0369] active:bg-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
