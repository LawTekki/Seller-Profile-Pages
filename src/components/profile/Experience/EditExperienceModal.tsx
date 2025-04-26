import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

interface EditExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (experience: Experience) => void;
  experience?: Experience;
}

export const EditExperienceModal: React.FC<EditExperienceModalProps> = ({
  isOpen,
  onClose,
  onSave,
  experience,
}) => {
  const [formData, setFormData] = React.useState<Experience>({
    title: experience?.title || "",
    company: experience?.company || "",
    date: experience?.date || "",
    description: experience?.description || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{experience ? "Edit Experience" : "Add New Experience"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Legal Adviser"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">Company</label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Emperor Legal services"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium">Date</label>
            <Input
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              placeholder="e.g. 26th Oct, 2023 - Present"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter your responsibilities and achievements..."
              required
              rows={5}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="bg-[#6B047C] hover:bg-[#5a0368]">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}; 
