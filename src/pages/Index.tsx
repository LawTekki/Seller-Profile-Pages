import React from "react";
import { Header } from "@/components/profile/Header";
import { Search } from "@/components/profile/Search";
import { Banner } from "@/components/profile/Banner";
import { Tabs } from "@/components/profile/Tabs";
import { Video } from "@/components/profile/Video";
import { Bio } from "@/components/profile/Bio";
import { Details } from "@/components/profile/Details";
import { Tags } from "@/components/profile/Tags";

const Index = () => {
  const governingLawTags = [
    "Adoption law",
    "Admiralty law",
    "Canon law",
    "Copyright law",
    "Banking law",
    "Food law",
    "Computer law",
    "Construction law",
    "Elder law",
  ];

  return (
    <div className="bg-neutral-50 flex flex-col overflow-hidden items-center pb-[67px]">
      <div className="self-stretch w-full max-md:max-w-full">
        <header className="border-b-[color:var(--Grey-2,#E6E6E6)] bg-white overflow-hidden px-[37px] py-10 rounded-[8px_0px_0px_0px] border-b border-solid max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <Header name="Wisdom" />
            <Search />
          </div>
        </header>

        <main>
          <Banner
            profileImage="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/a7a911766cf3a207a603f9830436483b55ad50db?placeholderIfAbsent=true"
            name="Wisdom Umanah"
            country="Nigeria"
            countryFlag="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/91bcda8441b842e4f4e08b7037f60cccd9c62b83?placeholderIfAbsent=true"
            hourlyRate="$50"
          />

          <section className="flex w-full max-w-[999px] flex-col ml-[59px] mt-[102px] max-md:max-w-full max-md:mt-10">
            <nav>
              <Tabs />
            </nav>

            <div className="self-stretch flex w-full flex-col mt-[63px] pl-[7px] max-md:max-w-full max-md:mt-10">
              <Video />

              <Bio content="I was blown away by the exceptional quality and clarity of the 'LegalShield' document drafting software! As a solo practitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer As a solo practitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer" />

              <Details />

              <Tags title="Governing law" tags={governingLawTags} />
              <Tags title="Practice area" tags={governingLawTags} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
