import React, { useState, lazy, Suspense } from "react";
import { Banner } from "@/components/profile/Banner";
import { Tabs } from "@/components/profile/Tabs";
import { Video } from "@/components/profile/Video";
import { Bio } from "@/components/profile/Bio";
import { Details as DetailsSection } from "@/components/profile/Details";
import { Tags } from "@/components/profile/Tags";
import { Header } from "@/components/Header";
import ExperienceTabView from "@/components/profile/Experience/ExperienceTabView";
import ReviewTabView from "@/components/profile/Review/ReviewTabView";
import { EventList } from "@/components/profile/events/EventList";
import { BookList } from "@/components/profile/Books/BookList";

const Index = () => {
  // Set up tags for Governing law in the exact order and grouping as the image
  const governingLawTags = [
    "Adoption law", // 1st row
    "Admiralty law",
    "Canon law",
    "Copyright law",
    "Banking law", // 2nd row
    "Food law",
    "Computer law",
    "Construction law", // 3rd row
    "Elder law",
  ];
  const initialTags = governingLawTags;
  const [bio, setBio] = useState(
    "I was blown away by the exceptional quality and clarity of the 'LegalShield' document drafting software! As a solo practitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer As a solo practitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer"
  );
  const [governingLawTagsState, setGoverningLawTags] = useState(governingLawTags);
  
  // Set up tags for Practice area in the exact order and grouping as the image
  const practiceAreaTagsList = [
    "Adoption law", // 1st row
    "Admiralty law",
    "Canon law",
    "Copyright law",
    "Banking law", // 2nd row
    "Food law",
    "Computer law",
    "Construction law", // 3rd row
    "Elder law",
  ];
  const [practiceAreaTags, setPracticeAreaTags] = useState(practiceAreaTagsList);

  const [activeTab, setActiveTab] = useState("About");

  return (
    <>
      <Header />
      <div className="bg-neutral-50 flex flex-col overflow-hidden items-center pb-[67px] min-h-screen">
        <div className="self-stretch w-full max-md:max-w-full">
          <main>
            <Banner
              profileImage="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/a7a911766cf3a207a603f9830436483b55ad50db?placeholderIfAbsent=true"
              name="Wisdom Umanah"
              country="Nigeria"
              countryFlag="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/91bcda8441b842e4f4e08b7037f60cccd9c62b83?placeholderIfAbsent=true"
              hourlyRate="$50"
            />

            <section className="flex w-full max-w-[999px] flex-col mx-auto mt-[102px] max-md:max-w-full max-md:mt-10 px-2 sm:px-0">
              <nav>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              </nav>

              <div className="self-stretch flex w-full flex-col mt-[63px] pl-0 max-md:max-w-full max-md:mt-10">
                {activeTab === "Experience" && <ExperienceTabView />}
                {activeTab === "Products" && <BookList />}
                {activeTab === "Events" && <EventList />}
                {activeTab === "Reviews" && <ReviewTabView />}
                {activeTab !== "Experience" && activeTab !== "Products" && activeTab !== "Events" && activeTab !== "Reviews" && (
                  <>
                    <Video />
                    <Bio content={bio} onUpdate={setBio} />
                    <DetailsSection />
                    <Tags
                      title="Governing law"
                      tags={governingLawTagsState}
                      editable={true}
                      onUpdate={setGoverningLawTags}
                    />
                    <Tags
                      title="Practice area"
                      tags={practiceAreaTags}
                      editable={true}
                      onUpdate={setPracticeAreaTags}
                    />
                  </>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Index;
