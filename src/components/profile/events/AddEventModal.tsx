import React, { useState, useRef } from "react";

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (eventData: {
    title: string;
    date: string;
    time: string;
    image: string;
    description: string;
  }) => void;
}

export const AddEventModal: React.FC<AddEventModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    image: "",
    description: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreviewImage(base64String);
        setFormData({ ...formData, image: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image");
      return;
    }
    onSubmit(formData);
    onClose();
    // Reset form
    setFormData({ title: "", date: "", time: "", image: "", description: "" });
    setPreviewImage(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreviewImage(base64String);
        setFormData({ ...formData, image: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Add New Event</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C] resize-none"
              required
              placeholder="Enter event description..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Image
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-2 text-center cursor-pointer hover:border-[#6B047C] transition-colors"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {previewImage ? (
                <div className="relative">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="max-h-40 mx-auto rounded"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewImage(null);
                      setFormData({ ...formData, image: "" });
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="text-gray-500">
                  <p>Drag and drop an image here, or click to select</p>
                  <p className="text-sm mt-1">Supports: JPG, PNG, GIF</p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 border border-[#6B047C] text-[#6B047C] rounded hover:bg-[#6B047C] hover:text-white active:bg-[#4A0259] active:border-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 bg-[#6B047C] text-white rounded hover:bg-[#5A0369] active:bg-[#4A0259] transform hover:scale-105 active:scale-100 transition-all duration-150"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
