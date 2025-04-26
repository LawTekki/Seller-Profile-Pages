import * as React from "react";
import { CertificateCard } from "./CertificateCard";

interface Certificate {
  id: number;
  title: string;
  dateIssued: string;
  fileSize: string;
  file?: File;
}

interface CertificateSectionProps {
  certificates: Certificate[];
  onEditCertificate: (certificate: Certificate) => void;
  onAddCertificate: () => void;
}

export const CertificateSection: React.FC<CertificateSectionProps> = ({
  certificates,
  onEditCertificate,
  onAddCertificate,
}) => {
  return (
    <section className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-[#1A011E] tracking-[-0.4px]">
          Certificate and license
        </h2>
        <button
          onClick={onAddCertificate}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Add certificate"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/e3ebdb78a99200607e0aa3ba8481fb70b23e7021"
            alt=""
            className="w-5 h-5"
          />
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            title={certificate.title}
            dateIssued={certificate.dateIssued}
            fileSize={certificate.fileSize}
            onView={() => onEditCertificate(certificate)}
          />
        ))}
      </div>
    </section>
  );
};
