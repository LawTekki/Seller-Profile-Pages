import React from "react";
import { ReviewCard } from "./ReviewCard";

const reviews = [
  {
    userImage: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/a02644a5632b54b88d3f18ae21e116150d5db691?placeholderIfAbsent=true",
    username: "wisdom umanah",
    rating: 3,
    title: "Best product purchase",
    content:
      '"I was blown away by the exceptional quality and clarity of the \'LegalShield\' document drafting software! As a solo practitioner, I\'ve struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer"',
    productName: "HOW TO LAW RIGHT",
  },
  {
    userImage: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/a02644a5632b54b88d3f18ae21e116150d5db691?placeholderIfAbsent=true",
    username: "wisdom umanah",
    rating: 3,
    title: "Best product purchase",
    content:
      '"I was blown away by the exceptional quality and clarity of the \'LegalShield\' document drafting software! As a solo practitioner, I\'ve struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer"',
    productName: "HOW TO LAW RIGHT",
  },
  {
    userImage: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/a02644a5632b54b88d3f18ae21e116150d5db691?placeholderIfAbsent=true",
    username: "wisdom umanah",
    rating: 3,
    title: "Best product purchase",
    content:
      '"I was blown away by the exceptional quality and clarity of the \'LegalShield\' document drafting software! As a solo practitioner, I\'ve struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer"',
    productName: "HOW TO LAW RIGHT",
  },
];

export const ReviewComponent: React.FC = () => {
  return (
    <section className="max-w-[880px] w-full mx-auto flex flex-col items-center">
      <div className="w-full space-y-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            userImage={review.userImage}
            username={review.username}
            rating={review.rating}
            title={review.title}
            content={review.content}
            productName={review.productName}
          />
        ))}
      </div>
    </section>
  );
};
