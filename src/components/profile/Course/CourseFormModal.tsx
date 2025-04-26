import React, { useState, useRef, useEffect } from "react";
import { Course } from "@/types/course";

interface CourseFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (course: Partial<Course>) => void;
  course?: Course;
  mode: "edit" | "add";
}

export const CourseFormModal: React.FC<CourseFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  course,
  mode,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<Partial<Course>>(
    course || {
      type: "COURSE",
      title: "",
      instructor: "",
      duration: "",
      price: 0,
      imageUrl: "",
      description: "",
    }
  );
  const [previewImage, setPreviewImage] = useState<string>(course?.imageUrl || "");

  useEffect(() => {
    if (isOpen) {
      setFormData(
        course || {
          type: "COURSE",
          title: "",
          instructor: "",
          duration: "",
          price: 0,
          imageUrl: "",
          description: "",
        }
      );
      setPreviewImage(course?.imageUrl || "");
    }
  }, [isOpen, course]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewImage(imageUrl);
        setFormData({ ...formData, imageUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">
            {mode === "edit" ? "Edit Course" : "Add New Course"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
              required
              placeholder="Enter course title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Instructor</label>
            <input
              type="text"
              value={formData.instructor}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
              required
              placeholder="Enter instructor name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Duration</label>
            <input
              type="text"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
              required
              placeholder="e.g. 10 weeks, 20 hours, etc."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Price ($)</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
              required
              min="0"
              step="1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm min-h-[100px] resize-none focus:border-[#6B047C] focus:outline-none"
              required
              placeholder="Enter course description"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#808080]">Course Preview Image</label>
            <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-[#E6E6E6] rounded-lg hover:border-[#6B047C] transition-colors">
              {previewImage ? (
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/Frame 1000008455.jpg";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewImage("");
                      setFormData({ ...formData, imageUrl: "" });
                    }}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center gap-2 text-[#808080] hover:text-[#6B047C]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-sm">Click to upload image</span>
                </button>
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
          <div className="flex gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 text-[#6B047C] border border-[#6B047C] rounded text-sm font-medium leading-[18.2px] cursor-pointer px-4 py-2 hover:bg-[#6B047C] hover:text-white transition-colors hover:scale-105"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 text-white rounded text-sm font-medium leading-[18.2px] cursor-pointer bg-[#6B047C] px-4 py-2 hover:bg-[#5A036A] transition-colors hover:scale-105"
            >
              {mode === "edit" ? "Save Changes" : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
