import React from "react";

interface DetailItemProps {
  label: string;
  value: string;
  icon: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value, icon }) => (
  <div className="flex items-stretch gap-[13px]">
    <div className="flex flex-col items-stretch justify-center">
      <div className="text-[#808080] text-xl leading-[1.3] tracking-[-0.4px]">
        {label}
      </div>
      <div className="gap-2 text-base text-[#1A011E] tracking-[-0.32px] mt-2">
        {value}
      </div>
    </div>
    <img src={icon} className="aspect-[1] object-contain w-6 shrink-0" />
  </div>
);

export const Details = () => {
  const details = [
    { label: "Email", value: "wisdomumanah@gmail.com", icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/434545718ddf2fc5dbb7948d7c523a001cdf8e37?placeholderIfAbsent=true" },
    { label: "Phone number", value: "+234 812 8494 3245", icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/d28ad94205375b999c8b28bf466dc2b3c1ec6fc1?placeholderIfAbsent=true" },
    { label: "Address", value: "London", icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/d28ad94205375b999c8b28bf466dc2b3c1ec6fc1?placeholderIfAbsent=true" },
    { label: "Legal qualification", value: "Lawyer", icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/d28ad94205375b999c8b28bf466dc2b3c1ec6fc1?placeholderIfAbsent=true" },
    { label: "Occupation", value: "Lawyer", icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/d28ad94205375b999c8b28bf466dc2b3c1ec6fc1?placeholderIfAbsent=true" },
    {
      label: "Years of experience",
      value: "English, Turkish",
      icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e3fc1f9ab4de1fa66c54875b618546cfb73a5f49?placeholderIfAbsent=true",
    },
    { label: "Legal qualification", value: "25 years", icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/3b2d40ff111dc832c2213c01e6a87ecb16be458c?placeholderIfAbsent=true" },
    { label: "Registration ID", value: "ID83478448", icon: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/47d94d5a008fc4f13b8f8d27839da07a74a71b87?placeholderIfAbsent=true" },
  ];

  return (
    <div className="self-stretch mt-10 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {[0, 1, 2].map((columnIndex) => (
          <div
            key={columnIndex}
            className="w-[33%] ml-5 first:ml-0 max-md:w-full max-md:ml-0"
          >
            <div className="flex w-full flex-col items-stretch font-medium max-md:mt-10">
              {details
                .slice(columnIndex * 3, (columnIndex + 1) * 3)
                .map((detail, index) => (
                  <DetailItem
                    key={index}
                    label={detail.label}
                    value={detail.value}
                    icon={detail.icon}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
