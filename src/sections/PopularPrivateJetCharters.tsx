import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PopularPrivateJetChartersProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const PopularPrivateJetCharters: React.FC<PopularPrivateJetChartersProps> = ({
  hasSectionPadding,
  hasInlinePadding = true,
}) => {
  const cardInfo = [
    {
      imageLink: "/images/workflow-automation.jpg",
      name: "Workflow Automation",
      altText: "AI-powered workflow automation solutions",
      pageLink: "/workflow-automation",
    },
    {
      imageLink: "/images/conversational-ai.jpg",
      name: "Conversational AI",
      altText: "Intelligent chatbots and virtual assistants",
      pageLink: "/conversational-ai",
    },
    {
      imageLink: "/images/lead-generation.jpg",
      name: "Lead Generation",
      altText: "AI-driven lead generation and verification",
      pageLink: "/lead-generation",
    },
    {
      imageLink: "/images/data-analytics.jpg",
      name: "Data Analytics",
      altText: "AI-powered data analytics and insights",
      pageLink: "/data-analytics",
    },
  ];

  return (
    <section
      className={`flex flex-col items-center max-w-[1800px] mx-auto ${
        hasInlinePadding ? "px-5 md:px-10 lg:px-20" : ""
      } ${hasSectionPadding === false ? "!py-10" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Key AI Solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 mb-8">
        {cardInfo.map((card, index) => (
          <Link
            href={card.pageLink}
            key={index}
            className="cursor-pointer rounded-2xl border-[3px] overflow-hidden transition-all ease-in duration-100 hover:-translate-y-2 hover:border-blue-600 hover:shadow-card_shadow"
          >
            <Image
              src={card.imageLink}
              width={280}
              height={175}
              alt={card.altText}
              className="w-full object-cover"
            />
            <div className="p-4 text-white text-center bg-gradient-to-r from-blue-600 to-blue-700 bg-cover">
              <h3 className="text-lg font-semibold">{card.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/solutions"
        className="text-white px-10 py-2 my-2 rounded-full text-lg bg-gradient-to-r from-blue-600 to-blue-700 transition-all ease-linear hover:-translate-y-1 hover:shadow-card_shadow"
      >
        Explore All Solutions
      </Link>
    </section>
  );
};

export default PopularPrivateJetCharters;
