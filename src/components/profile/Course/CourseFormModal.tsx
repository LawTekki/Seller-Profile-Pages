import React, { useState } from "react";
import { Course } from "@/types/course";

interface CourseFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Course>) => void;
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
  if (!isOpen) return null;

  const [imagePreview, setImagePreview] = useState<string | null>(course?.imageUrl || null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: Partial<Course> = {
      title: formData.get("title") as string,
      instructor: formData.get("instructor") as string,
      price: Number(formData.get("price")),
      description: formData.get("description") as string,
      duration: formData.get("duration") as string,
      imageUrl: imagePreview || "/template-category.png",
    };
    onSubmit(data);
    onClose();
  };

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
              name="title"
              placeholder="Enter course title"
              defaultValue={course?.title}
              required
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Instructor</label>
            <input
              type="text"
              name="instructor"
              placeholder="Enter instructor name"
              defaultValue={course?.instructor}
              required
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="300"
              defaultValue={course?.price}
              required
              min="0"
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="e.g., 36 hours"
              defaultValue={course?.duration}
              required
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm focus:border-[#6B047C] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#808080]">Description</label>
            <textarea
              name="description"
              placeholder="Enter course description"
              defaultValue={course?.description}
              required
              rows={3}
              className="border border-[#E6E6E6] rounded px-3 py-2 text-sm resize-none focus:border-[#6B047C] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#808080]">Course Preview Image</label>
            <div className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-[#E6E6E6] rounded-lg hover:border-[#6B047C] transition-colors">
              {imagePreview ? (
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                  />
                </div>
              ) : (
                <div className="cursor-pointer relative w-full aspect-[4/3] flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Click to upload image</div>
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#6B047C] text-white rounded-md text-sm hover:bg-[#5A036A]"
            >
              {mode === "edit" ? "Save Changes" : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};