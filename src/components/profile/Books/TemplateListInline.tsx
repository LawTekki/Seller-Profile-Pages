import React, { useState } from "react";
import { Template } from "@/types/template";
import { TemplateCard } from "../Template/TemplateCard";
import { TemplateFormModal } from "../Template/TemplateFormModal";

// Copy of MOCK_TEMPLATES from TemplateList
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

export const TemplateListInline: React.FC = () => {
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

  return (
    <>
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={{ ...template, imageUrl: "/Frame 1000008455.jpg" }}
          onEdit={handleEdit}
          onBuy={() => {}}
        />
      ))}
      <TemplateFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={() => setIsModalOpen(false)}
        template={selectedTemplate}
        mode={modalMode}
      />
    </>
  );
};
