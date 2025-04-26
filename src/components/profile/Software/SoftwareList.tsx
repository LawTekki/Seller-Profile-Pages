import React, { useState } from "react";
import { SoftwareCard } from "./SoftwareCard";
import { SoftwareFormModal } from "./SoftwareFormModal";
import { Pagination } from "./Pagination";
import { Software } from "@/types/software";

export const SoftwareList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSoftware, setEditingSoftware] = useState<Software | undefined>();
  const [modalMode, setModalMode] = useState<"edit" | "add">("add");
  const [softwareList, setSoftwareList] = useState<Software[]>(
    Array(6).fill(null).map((_, index) => ({
      id: String(index + 1),
      type: "SOFTWARE",
      title: "Winning cases upfront",
      author: "Wisdom Umanah",
      version: "2.0",
      price: 300,
      imageUrl: "/software-mouse.jpg",
      description: "Software description",
    }))
  );

  const handleAddNew = () => {
    setModalMode("add");
    setEditingSoftware(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (id: string) => {
    const softwareToEdit = softwareList.find((item) => item.id === id);
    if (softwareToEdit) {
      setModalMode("edit");
      setEditingSoftware(softwareToEdit);
      setIsModalOpen(true);
    }
  };

  const handleBuy = (id: string) => {
    // Implement buy functionality
    console.log("Buy software with id:", id);
  };

  const handleSubmit = (software: Partial<Software>) => {
    if (modalMode === "add") {
      // Add new software
      const newSoftware: Software = {
        id: String(softwareList.length + 1),
        type: "SOFTWARE",
        title: software.title || "",
        author: software.author || "",
        version: software.version || "1.0",
        price: software.price || 0,
        imageUrl: software.imageUrl || "/software-mouse.jpg",
        description: software.description || "",
      };
      setSoftwareList([...softwareList, newSoftware]);
    } else {
      // Edit existing software
      setSoftwareList(
        softwareList.map((item) =>
          item.id === editingSoftware?.id ? { ...item, ...software } : item
        )
      );
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-16 py-4 md:py-6">
      <div className="flex justify-end items-center mb-4 md:mb-6">
        <button
          onClick={handleAddNew}
          className="text-white rounded text-sm font-medium leading-[18.2px] cursor-pointer bg-[#6B047C] px-4 py-2 hover:bg-[#5A036A] transition-all duration-200 hover:scale-105 w-full md:w-auto"
        >
          Add a new software
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {softwareList.map((item) => (
          <SoftwareCard
            key={item.id}
            software={item}
            onEdit={handleEdit}
            onBuy={handleBuy}
          />
        ))}
      </div>

      {softwareList.length > 0 && (
        <div className="mt-6 md:mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={6}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      <SoftwareFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        software={editingSoftware}
        mode={modalMode}
      />
    </div>
  );
};
