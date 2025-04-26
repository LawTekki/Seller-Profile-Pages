import * as React from "react";
import { AddExperienceButton } from "./AddExperienceButton";
import { ExperienceCard } from "./ExperienceCard";
import { CertificateSection } from "./CertificateSection";
import { EditExperienceModal } from "./EditExperienceModal";
import { EditCertificateModal } from "./EditCertificateModal";

interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
}

interface Certificate {
  id: number;
  title: string;
  dateIssued: string;
  fileSize: string;
  file?: File;
}

export const ExperienceTabView: React.FC = () => {
  const [experiences, setExperiences] = React.useState<Experience[]>([
    {
      id: 1,
      title: "Legal Adviser",
      company: "Emperor Legal services",
      date: "26th Oct, 2023 - Present",
      description: `Provided strategic legal counsel to senior management on corporate governance, mergers and acquisitions, and commercial transactions.
Drafted, negotiated, and reviewed contracts with suppliers, partners, and clients.
Conducted due diligence on potential business partners and acquisitions.
Managed disputes and litigation, utilizing alternative dispute resolution methods.
Ensured regulatory compliance, implementing risk management strategies.`,
    },
    {
      id: 2,
      title: "Legal Adviser",
      company: "Emperor Legal services",
      date: "26th Oct, 2023 - Present",
      description: `Provided strategic legal counsel to senior management on corporate governance, mergers and acquisitions, and commercial transactions.
Drafted, negotiated, and reviewed contracts with suppliers, partners, and clients.
Conducted due diligence on potential business partners and acquisitions.
Managed disputes and litigation, utilizing alternative dispute resolution methods.
Ensured regulatory compliance, implementing risk management strategies.`,
    },
  ]);

  const [certificates, setCertificates] = React.useState<Certificate[]>([
    {
      id: 1,
      title: "Legal practice",
      dateIssued: "12 May, 2024",
      fileSize: "720 KB",
    },
    {
      id: 2,
      title: "Legal practice",
      dateIssued: "12 May, 2024",
      fileSize: "720 KB",
    },
    {
      id: 3,
      title: "Legal practice",
      dateIssued: "12 May, 2024",
      fileSize: "720 KB",
    },
  ]);

  const [isExperienceModalOpen, setIsExperienceModalOpen] = React.useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = React.useState(false);
  const [selectedExperience, setSelectedExperience] = React.useState<Experience | undefined>();
  const [selectedCertificate, setSelectedCertificate] = React.useState<Certificate | undefined>();

  const handleAddExperience = () => {
    setSelectedExperience(undefined);
    setIsExperienceModalOpen(true);
  };

  const handleEditExperience = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsExperienceModalOpen(true);
  };

  const handleSaveExperience = (experienceData: Omit<Experience, "id">) => {
    if (selectedExperience) {
      setExperiences(experiences.map(exp => 
        exp.id === selectedExperience.id 
          ? { ...experienceData, id: exp.id }
          : exp
      ));
    } else {
      setExperiences([...experiences, { ...experienceData, id: Date.now() }]);
    }
  };

  const handleEditCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsCertificateModalOpen(true);
  };

  const handleAddCertificate = () => {
    setSelectedCertificate(undefined);
    setIsCertificateModalOpen(true);
  };

  const handleSaveCertificate = (certificateData: Omit<Certificate, "id">) => {
    if (selectedCertificate) {
      setCertificates(certificates.map(cert => 
        cert.id === selectedCertificate.id 
          ? { ...certificateData, id: cert.id }
          : cert
      ));
    } else {
      setCertificates([...certificates, { ...certificateData, id: Date.now() }]);
    }
  };

  return (
    <div className="max-w-[880px] w-full mx-auto px-0 flex flex-col items-center">
      <div className="max-w-[856px] w-full mx-auto px-4 py-2">
        <div className="flex justify-end mb-2">
          <AddExperienceButton onClick={handleAddExperience} />
        </div>

        <div className="space-y-3">
          {experiences.map((experience) => (
            <React.Fragment key={experience.id}>
              <ExperienceCard
                {...experience}
                onEdit={() => handleEditExperience(experience)}
              />
              {experience.id !== experiences[experiences.length - 1].id && (
                <div className="h-px bg-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>

        <CertificateSection
          certificates={certificates}
          onEditCertificate={handleEditCertificate}
          onAddCertificate={handleAddCertificate}
        />

        <EditExperienceModal
          isOpen={isExperienceModalOpen}
          onClose={() => setIsExperienceModalOpen(false)}
          onSave={handleSaveExperience}
          experience={selectedExperience}
        />

        <EditCertificateModal
          isOpen={isCertificateModalOpen}
          onClose={() => setIsCertificateModalOpen(false)}
          onSave={handleSaveCertificate}
          certificate={selectedCertificate}
        />
      </div>
    </div>
  );
};

export default ExperienceTabView;
