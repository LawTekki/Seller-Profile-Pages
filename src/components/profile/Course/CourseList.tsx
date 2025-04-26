import React, { useState } from "react";
import { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";
import { Pagination } from "../Template/Pagination";
import { CourseFormModal } from "./CourseFormModal";

const MOCK_COURSES: Course[] = [
  {
    id: "1",
    type: "COURSE",
    title: "Mastering Business Law",
    instructor: "Wisdom Umanah",
    format: "Video",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive course on business law fundamentals.",
    duration: "36 hours"
  },
  {
    id: "2",
    type: "COURSE",
    title: "Mastering Business Law",
    instructor: "Wisdom Umanah",
    format: "Video",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive course on business law fundamentals.",
    duration: "36 hours"
  },
  {
    id: "3",
    type: "COURSE",
    title: "Mastering Business Law",
    instructor: "Wisdom Umanah",
    format: "Video",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive course on business law fundamentals.",
    duration: "36 hours"
  },
  {
    id: "4",
    type: "COURSE",
    title: "Mastering Business Law",
    instructor: "Wisdom Umanah",
    format: "Video",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive course on business law fundamentals.",
    duration: "36 hours"
  },
  {
    id: "5",
    type: "COURSE",
    title: "Mastering Business Law",
    instructor: "Wisdom Umanah",
    format: "Video",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive course on business law fundamentals.",
    duration: "36 hours"
  },
  {
    id: "6",
    type: "COURSE",
    title: "Mastering Business Law",
    instructor: "Wisdom Umanah",
    format: "Video",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive course on business law fundamentals.",
    duration: "36 hours"
  }
];

const CourseList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState<Course[]>(MOCK_COURSES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>();
  const [modalMode, setModalMode] = useState<"edit" | "add">("add");

  const handleEdit = (id: string) => {
    const courseToEdit = courses.find((course) => course.id === id);
    if (courseToEdit) {
      setSelectedCourse(courseToEdit);
      setModalMode("edit");
      setIsModalOpen(true);
    }
  };

  const handleBuy = (id: string) => {
    // Here you would typically integrate with a payment system
    alert(`Processing payment for course: ${id}`);
  };

  const handleAddCourse = () => {
    setSelectedCourse(undefined);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSubmit = (courseData: Partial<Course>) => {
    if (modalMode === "edit" && selectedCourse) {
      // Update existing course
      setCourses(
        courses.map((course) =>
          course.id === selectedCourse.id ? { ...course, ...courseData } : course
        )
      );
    } else {
      // Add new course
      const newCourse: Course = {
        id: String(courses.length + 1),
        type: "COURSE",
        format: "Video",
        ...courseData,
      } as Course;
      setCourses([...courses, newCourse]);
    }
  };

  return (
    <main className="max-w-[1000px] w-full box-border mx-auto my-0 px-16 py-6 max-sm:px-4">
      <div className="flex justify-end items-center mb-8 max-sm:mb-6">
        <button
          onClick={handleAddCourse}
          className="text-white rounded text-sm font-medium leading-[18.2px] cursor-pointer bg-[#6B047C] px-4 py-2 max-sm:w-full hover:scale-105 transition-all duration-200"
        >
          Add a new course
        </button>
      </div>

      <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEdit={handleEdit}
            onBuy={handleBuy}
          />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={setCurrentPage}
      />

      <CourseFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        course={selectedCourse}
        mode={modalMode}
      />
    </main>
  );
};

export default CourseList; 