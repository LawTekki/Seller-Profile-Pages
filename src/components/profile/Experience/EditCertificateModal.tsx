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

interface Certificate {
  title: string;
  dateIssued: string;
  fileSize: string;
  file?: File;
}

interface EditCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (certificate: Certificate) => void;
  certificate?: Certificate;
}

export const EditCertificateModal: React.FC<EditCertificateModalProps> = ({
  isOpen,
  onClose,
  onSave,
  certificate,
}) => {
  const [formData, setFormData] = React.useState<Certificate>({
    title: certificate?.title || "",
    dateIssued: certificate?.dateIssued || "",
    fileSize: certificate?.fileSize || "",
  });

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSizeInKB = Math.round(file.size / 1024);
      setFormData({
        ...formData,
        file,
        fileSize: `${fileSizeInKB} KB`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{certificate ? "Edit Certificate" : "Add New Certificate"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Legal practice"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="dateIssued" className="text-sm font-medium">Date Issued</label>
            <Input
              id="dateIssued"
              value={formData.dateIssued}
              onChange={(e) => setFormData({ ...formData, dateIssued: e.target.value })}
              placeholder="e.g. 12 May, 2024"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="file" className="text-sm font-medium">Certificate File (PDF)</label>
            <Input
              id="file"
              type="file"
              accept=".pdf"
              ref={fileInputRef}
              onChange={handleFileChange}
              required={!certificate}
            />
            {formData.fileSize && (
              <p className="text-sm text-gray-500">File size: {formData.fileSize}</p>
            )}
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
