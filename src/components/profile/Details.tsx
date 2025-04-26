import React, { useState } from "react";
import styles from "./Details.module.css";

interface DetailItemProps {
  label: string;
  value: string;
  onEdit: (value: string) => void;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onEdit(tempValue);
    setEditing(false);
  };
  const handleCancel = () => {
    setTempValue(value);
    setEditing(false);
  };

  return (
    <div className={styles.detailItem}>
      <div className={styles.detailContent}>
        <div className={styles.labelRow}>
          {label}
          {!editing && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/79e8e73a137781124827e5ab59ebd63b20192040?placeholderIfAbsent=true"
              className={styles.editIcon}
              alt="Edit icon"
              onClick={() => setEditing(true)}
            />
          )}
        </div>
        {editing ? (
          <div className={styles.editAreaWrapper}>
            <input
              className={styles.inputEdit}
              value={tempValue}
              onChange={e => setTempValue(e.target.value)}
              autoFocus
            />
            <div className={styles.editBtns}>
              <button className={styles.saveBtn} onClick={handleSave}>Save</button>
              <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className={styles.value}>{value}</div>
        )}
      </div>
    </div>
  );
};

export const Details = () => {
  // Grid order for 2 columns per row on mobile (see image)
  const initialDetails = [
    { label: "Email", value: "wisdomumanah@gmail.com" },
    { label: "Phone number", value: "+234 812 8494 3245" },
    { label: "Legal qualification", value: "Barrister-at-Law" },
    { label: "Languages", value: "English, Turkish" },
    { label: "Occupation", value: "Lawyer" },
    { label: "Skills", value: "Negotiation, Contract" },
    { label: "Experience Years", value: "25 years" },
    { label: "Address", value: "London" },
    { label: "Registration ID", value: "ID83478448" },
  ];
  const [details, setDetails] = useState(initialDetails);

  const handleEdit = (idx: number, value: string) => {
    setDetails(prev => prev.map((item, i) => (i === idx ? { ...item, value } : item)));
  };

  return (
    <div className={styles.detailsGrid}>
      {details.map((detail, idx) => (
        <DetailItem
          key={idx}
          label={detail.label}
          value={detail.value}
          onEdit={val => handleEdit(idx, val)}
        />
      ))}
    </div>
  );
};
