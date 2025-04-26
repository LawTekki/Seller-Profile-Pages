import React, { useState } from "react";
import { Template } from "@/types/template";
import { TemplateCard } from "./TemplateCard";
import { Pagination } from "./Pagination";
import { TemplateFormModal } from "./TemplateFormModal";

const MOCK_TEMPLATES: Template[] = [
  {
    id: "1",
    type: "TEMPLATE",
    title: "Legal business plan",
    author: "Wisdom Umanah",
    fileType: "DOC",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive business plan template for legal practices.",
    discountInfo: "20% Discount: $300 $240 | 36-32hrs"
  },
  {
    id: "2",
    type: "TEMPLATE",
    title: "Legal business plan",
    author: "Wisdom Umanah",
    fileType: "DOC",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive business plan template for legal practices.",
    discountInfo: null
  },
  {
    id: "3",
    type: "TEMPLATE",
    title: "Legal business plan",
    author: "Wisdom Umanah",
    fileType: "DOC",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive business plan template for legal practices.",
    discountInfo: "20% Discount: $300 $240 | 36-32hrs"
  },
  {
    id: "4",
    type: "TEMPLATE",
    title: "Legal business plan",
    author: "Wisdom Umanah",
    fileType: "DOC",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive business plan template for legal practices.",
    discountInfo: null
  },
  {
    id: "5",
    type: "TEMPLATE",
    title: "Legal business plan",
    author: "Wisdom Umanah",
    fileType: "DOC",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive business plan template for legal practices.",
    discountInfo: "20% Discount: $300 $240 | 36-32hrs"
  },
  {
    id: "6",
    type: "TEMPLATE",
    title: "Legal business plan",
    author: "Wisdom Umanah",
    fileType: "DOC",
    price: 300,
    imageUrl: "/template-category.png",
    description: "A comprehensive business plan template for legal practices.",
    discountInfo: null
  }
];

const TemplateList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [templates, setTemplates] = useState<Template[]>(MOCK_TEMPLATES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>();
  const [modalMode, setModalMode] = useState<"edit" | "add">("add");

  const handleEdit = (id: string) => {
    const templateToEdit = templates.find((template) => template.id === id);
    if (templateToEdit) {
      setSelectedTemplate(templateToEdit);
      setModalMode("edit");
      setIsModalOpen(true);
    }
  };

  const handleBuy = (id: string) => {
    // Here you would typically integrate with a payment system
    alert(`Processing payment for template: ${id}`);
  };

  const handleAddTemplate = () => {
    setSelectedTemplate(undefined);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSubmit = (templateData: Partial<Template>) => {
    if (modalMode === "edit" && selectedTemplate) {
      // Update existing template
      setTemplates(
        templates.map((template) =>
          template.id === selectedTemplate.id ? { ...template, ...templateData } : template
        )
      );
    } else {
      // Add new template
      const newTemplate: Template = {
        id: String(templates.length + 1),
        type: "TEMPLATE",
        fileType: "DOC",
        ...templateData,
      } as Template;
      setTemplates([...templates, newTemplate]);
    }
  };

  return (
    <main className="max-w-[1000px] w-full box-border mx-auto my-0 px-16 py-6 max-sm:px-4">
      <div className="flex justify-end items-center mb-8 max-sm:mb-6">
        <button
          onClick={handleAddTemplate}
          className="text-white rounded text-sm font-medium leading-[18.2px] cursor-pointer bg-[#6B047C] px-4 py-2 max-sm:w-full hover:scale-105 transition-all duration-200"
        >
          Add a new template
        </button>
      </div>

      <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
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

      <TemplateFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        template={selectedTemplate}
        mode={modalMode}
      />
    </main>
  );
};

export default TemplateList;
