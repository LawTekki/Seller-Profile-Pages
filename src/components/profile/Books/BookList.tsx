import React, { useState } from "react";
import { Book } from "./Book";
import { BookCard } from "./BookCard";
import { CategoryFilter, Category } from "./CategoryFilter";
import { Pagination } from "./Pagination";
import { BookFormModal } from "./BookFormModal";
import { SoftwareCard } from "../Software/SoftwareCard";
import { SoftwareFormModal } from "../Software/SoftwareFormModal";
import { Pagination as SoftwarePagination } from "../Software/Pagination";
import { TemplateListInline } from "./TemplateListInline";
import { TemplateFormModal } from "../Template/TemplateFormModal";
import { CourseCard } from "../Course/CourseCard";
import { CourseFormModal } from "../Course/CourseFormModal";
import { Course } from "@/types/course";

const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f63340b2ad1d91d53b28b3980a5bfb8d7570c5?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "2",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/01b02f2faab82c2ac72973a624b082184c6e2307?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "3",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74b3b7200c617997526800f5231207eddde4fdc?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "4",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f63340b2ad1d91d53b28b3980a5bfb8d7570c5?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "5",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/01b02f2faab82c2ac72973a624b082184c6e2307?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "6",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74b3b7200c617997526800f5231207eddde4fdc?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  }
];

const MOCK_SOFTWARES = Array(6).fill(null).map((_, index) => ({
  id: String(index + 1),
  type: "SOFTWARE",
  title: "Winning cases upfront",
  author: "Wisdom Umanah",
  version: "2.0",
  price: 300,
  imageUrl: "/Frame 1000008455.png",
  description: "Software description",
}));

const MOCK_COURSES: Course[] = [
  {
    id: "1",
    type: "COURSE",
    title: "Mastering Business Law",
    instructor: "Wisdom Umanah",
    format: "Video",
    price: 300,
    imageUrl: "/Course.svg",
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
    imageUrl: "/Course.svg",
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
    imageUrl: "/Course.svg",
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
    imageUrl: "/Course.svg",
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
    imageUrl: "/Course.svg",
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
    imageUrl: "/Course.svg",
    description: "A comprehensive course on business law fundamentals.",
    duration: "36 hours"
  }
];

export const BookList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Books");
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState<Book[]>(MOCK_BOOKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [modalMode, setModalMode] = useState<"edit" | "add">("add");
  const [softwareList, setSoftwareList] = useState(MOCK_SOFTWARES);
  const [softwareModalOpen, setSoftwareModalOpen] = useState(false);
  const [editingSoftware, setEditingSoftware] = useState(undefined);
  const [softwareModalMode, setSoftwareModalMode] = useState<"edit" | "add">("add");
  const [templateModalOpen, setTemplateModalOpen] = useState(false);
  const [courseList, setCourseList] = useState(MOCK_COURSES);
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | undefined>(undefined);
  const [courseModalMode, setCourseModalMode] = useState<"edit" | "add">("add");

  const handleEdit = (id: string) => {
    const bookToEdit = books.find((book) => book.id === id);
    if (bookToEdit) {
      setSelectedBook(bookToEdit);
      setModalMode("edit");
      setIsModalOpen(true);
    }
  };

  const handleBuy = (id: string) => {
    // Here you would typically integrate with a payment system
    alert(`Processing payment for book: ${id}`);
  };

  const handleAddBook = () => {
    setSelectedBook(undefined);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSubmit = (bookData: Partial<Book>) => {
    if (modalMode === "edit" && selectedBook) {
      // Update existing book
      setBooks(
        books.map((book) =>
          book.id === selectedBook.id ? { ...book, ...bookData } : book
        )
      );
    } else {
      // Add new book
      const newBook: Book = {
        id: String(books.length + 1),
        type: "BOOK",
        fileType: "PDF",
        ...bookData,
      } as Book;
      setBooks([...books, newBook]);
    }
  };

  return (
    <main className="max-w-[1000px] w-full box-border mx-auto my-0 px-16 py-2 max-sm:px-4 max-sm:py-2">
      {/* CATEGORY FILTER AND ADD BUTTON ROW */}
      <div className="flex items-center w-full mb-3 max-md:mb-2 gap-0 justify-between">
        <div className="flex-1 min-w-0 flex items-center max-sm:justify-start">
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>
        <div className="hidden sm:flex items-center justify-end ml-3 relative" style={{top: '-8px'}}>
          {selectedCategory === "Books" && (
            <button
              onClick={handleAddBook}
              className="flex items-center justify-center text-white rounded bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer px-4 py-2 min-w-[120px] h-8"
              style={{alignSelf: 'center'}}
            >
              Add a new book
            </button>
          )}
          {selectedCategory === "Software" && (
            <button
              onClick={() => {
                setSoftwareModalMode("add");
                setEditingSoftware(undefined);
                setSoftwareModalOpen(true);
              }}
              className="flex items-center justify-center text-white rounded bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer px-4 py-2 min-w-[120px] h-8"
              style={{alignSelf: 'center'}}
            >
              Add a new software
            </button>
          )}
          {selectedCategory === "Courses" && (
            <button
              onClick={() => {
                setCourseModalMode("add");
                setEditingCourse(undefined);
                setCourseModalOpen(true);
              }}
              className="flex items-center justify-center text-white rounded bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer px-4 py-2 min-w-[120px] h-8"
              style={{alignSelf: 'center'}}
            >
              Add a new course
            </button>
          )}
          {selectedCategory === "Templates" && (
            <button
              onClick={() => setTemplateModalOpen(true)}
              className="flex items-center justify-center text-white rounded bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer px-4 py-2 min-w-[120px] h-8"
              style={{alignSelf: 'center'}}
            >
              Add a new template
            </button>
          )}
        </div>
        {/* Mobile Add Button remains unchanged below */}
        <div className="sm:hidden flex items-center justify-center ml-3 max-sm:ml-2 relative" style={{top: '-9px'}}>
          {selectedCategory === "Books" && (
            <button
              onClick={handleAddBook}
              className="flex items-center justify-center text-white rounded-full bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer p-0 w-6 h-6 min-w-0 max-w-none"
              style={{alignSelf: 'center'}}
            >
              <span className="inline-flex"><svg xmlns='http://www.w3.org/2000/svg' className='h-2.5 w-2.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg></span>
            </button>
          )}
          {selectedCategory === "Software" && (
            <button
              onClick={() => {
                setSoftwareModalMode("add");
                setEditingSoftware(undefined);
                setSoftwareModalOpen(true);
              }}
              className="flex items-center justify-center text-white rounded-full bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer p-0 w-6 h-6 min-w-0 max-w-none"
              style={{alignSelf: 'center'}}
            >
              <span className="inline-flex"><svg xmlns='http://www.w3.org/2000/svg' className='h-2.5 w-2.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg></span>
            </button>
          )}
          {selectedCategory === "Courses" && (
            <button
              onClick={() => {
                setCourseModalMode("add");
                setEditingCourse(undefined);
                setCourseModalOpen(true);
              }}
              className="flex items-center justify-center text-white rounded-full bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer p-0 w-6 h-6 min-w-0 max-w-none"
              style={{alignSelf: 'center'}}
            >
              <span className="inline-flex"><svg xmlns='http://www.w3.org/2000/svg' className='h-2.5 w-2.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg></span>
            </button>
          )}
          {selectedCategory === "Templates" && (
            <button
              onClick={() => setTemplateModalOpen(true)}
              className="flex items-center justify-center text-white rounded-full bg-[#6B047C] text-sm font-medium leading-[18.2px] cursor-pointer p-0 w-6 h-6 min-w-0 max-w-none"
              style={{alignSelf: 'center'}}
            >
              <span className="inline-flex"><svg xmlns='http://www.w3.org/2000/svg' className='h-2.5 w-2.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' /></svg></span>
            </button>
          )}
        </div>
      </div>

      {selectedCategory === "Books" && (
        <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={handleEdit}
              onBuy={handleBuy}
            />
          ))}
        </section>
      )}
      {selectedCategory === "Software" && (
        <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
          {softwareList.map((item) => (
            <SoftwareCard
              key={item.id}
              software={item}
              onEdit={(id) => {
                setSoftwareModalMode("edit");
                setEditingSoftware(softwareList.find((sw) => sw.id === id));
                setSoftwareModalOpen(true);
              }}
              onBuy={() => {}}
            />
          ))}
        </section>
      )}
      {selectedCategory === "Courses" && (
        <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
          {courseList.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={(id) => {
                setCourseModalMode("edit");
                setEditingCourse(courseList.find((c) => c.id === id));
                setCourseModalOpen(true);
              }}
              onBuy={() => {}}
            />
          ))}
        </section>
      )}
      {selectedCategory === "Templates" && (
        <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
          <TemplateListInline />
        </section>
      )}

      {selectedCategory === "Books" && (
        <Pagination
          currentPage={currentPage}
          totalPages={6}
          onPageChange={setCurrentPage}
        />
      )}
      {selectedCategory === "Software" && (
        <SoftwarePagination
          currentPage={currentPage}
          totalPages={6}
          onPageChange={setCurrentPage}
        />
      )}
      {selectedCategory === "Courses" && (
        <Pagination
          currentPage={currentPage}
          totalPages={6}
          onPageChange={setCurrentPage}
        />
      )}
      {selectedCategory === "Templates" && (
        <Pagination
          currentPage={currentPage}
          totalPages={6}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Book Modal */}
      <BookFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        book={selectedBook}
        mode={modalMode}
      />
      {/* Software Modal */}
      <SoftwareFormModal
        isOpen={softwareModalOpen}
        onClose={() => setSoftwareModalOpen(false)}
        onSubmit={(software) => {
          if (softwareModalMode === "add") {
            const newSoftware = {
              id: String(softwareList.length + 1),
              type: "SOFTWARE",
              title: software.title || "",
              author: software.author || "",
              version: software.version || "1.0",
              price: software.price || 0,
              imageUrl: software.imageUrl || "/Frame 1000008455.png",
              description: software.description || "",
            };
            setSoftwareList([...softwareList, newSoftware]);
          } else {
            setSoftwareList(
              softwareList.map((item) =>
                item.id === editingSoftware?.id ? { ...item, ...software } : item
              )
            );
          }
          setSoftwareModalOpen(false);
        }}
        software={editingSoftware}
        mode={softwareModalMode}
      />
      {/* Course Modal */}
      <CourseFormModal
        isOpen={courseModalOpen}
        onClose={() => setCourseModalOpen(false)}
        onSubmit={(course) => {
          if (courseModalMode === "add") {
            const newCourse: Course = {
              id: String(courseList.length + 1),
              type: "COURSE",
              format: course.format || "Video",
              title: course.title || "Untitled Course",
              instructor: course.instructor || "Unknown Instructor",
              duration: course.duration || "Unknown Duration",
              price: typeof course.price === "number" ? course.price : 0,
              imageUrl: course.imageUrl || "/Course.svg",
              description: course.description || "",
            };
            setCourseList([...courseList, newCourse]);
          } else {
            setCourseList(
              courseList.map((item) =>
                item.id === editingCourse?.id
                  ? {
                      ...item,
                      ...course,
                      title: course.title || item.title,
                      instructor: course.instructor || item.instructor,
                      duration: course.duration || item.duration,
                      price: typeof course.price === "number" ? course.price : item.price,
                      imageUrl: course.imageUrl || item.imageUrl || "/Course.svg",
                      description: course.description || item.description,
                      format: course.format || item.format,
                    }
                  : item
              )
            );
          }
          setCourseModalOpen(false);
        }}
        course={editingCourse}
        mode={courseModalMode}
      />
      {/* Template Modal */}
      <TemplateFormModal
        isOpen={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
        onSubmit={() => setTemplateModalOpen(false)}
        mode="add"
      />
    </main>
  );
};
