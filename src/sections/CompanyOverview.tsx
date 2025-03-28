import Card from "@/components/Card";
import TextCompanyOverview from "@/components/TextCompanyOverview";
import Image from "next/image";
import React, { ReactNode } from "react";
import {
  Routes_DistanceCalculator,
  UsCanadaCities,
  InternationalCities,
  Aircraft,
  Airports,
} from "@/svg";
import CarouselContainer from "@/components/CarouselContainer";

type CompanyOverviewProps = {
  heading: string;
  collapseText: boolean;
  description: string;
  IconsItems: any;
};

const CompanyOverview = ({
  heading,
  description,
  collapseText = true,
  IconsItems,
}: CompanyOverviewProps) => {
  interface CarouselItem3 {
    icon: any | string;
    title: string;
    link: string;
  }
  interface CarouselItem4 {
    icon: any | string;
    title: string;
    description: string;
    link: string;
  }

  const carouselItems: CarouselItem3[] = [
    {
      icon: <Routes_DistanceCalculator />,
      title: "AI Workflow Automation",
      link: "/workflow-automation",
    },
    {
      icon: <UsCanadaCities />,
      title: "Conversational AI",
      link: "/conversational-ai",
    },
    {
      icon: <InternationalCities />,
      title: "Lead Generation",
      link: "/lead-generation",
    },
    {
      icon: <Aircraft />,
      title: "Custom AI Models",
      link: "/custom-ai-models",
    },
    {
      icon: <Airports />,
      title: "Data Analytics",
      link: "/data-analytics",
    },
  ];

  const carouselItems2: CarouselItem4[] = [
    {
      icon: <Routes_DistanceCalculator />,
      title: "AI Workflow Automation",
      description: "Streamline operations with intelligent process automation.",
      link: "/workflow-automation",
    },
    {
      icon: <UsCanadaCities />,
      title: "Conversational AI",
      description: "Engage customers with AI-powered chatbots and virtual assistants.",
      link: "/conversational-ai",
    },
    {
      icon: <InternationalCities />,
      title: "Lead Generation",
      description: "AI-driven insights for better targeting and conversion.",
      link: "/lead-generation",
    },
    {
      icon: <Aircraft />,
      title: "Custom AI Models",
      description: "Tailored machine learning solutions for your unique needs.",
      link: "/custom-ai-models",
    },
    {
      icon: <Airports />,
      title: "Data Analytics",
      description: "Transform data into actionable insights with AI.",
      link: "/data-analytics",
    },
  ];

  return (
    <section className="max-w-[1800px] mx-auto flex flex-col justify-center min-h-screen lg:pt-2 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-center gap-1 w-fit">
        <div className="w-full lg:min-w-[50%] lg:max-w-[50%] lg:pt-7">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">{heading}</h2>
          <p
            className={`${
              collapseText ? "xl:block hidden" : ""
            } details leading-relaxed text-lg`}
          >
            {description} <br />
            {collapseText ? (
              <span className="my-2 text-blue-600 font-bold italic">
                Transform with{" "}
                <span className="border-b-2 border-blue-600 text-inherit">
                  AI Innovation!
                </span>
              </span>
            ) : (
              ""
            )}
          </p>

          {collapseText ? (
            <>
              <div
                className={`block xl:hidden details leading-relaxed text-lg`}
              >
                <p>
                  At AIBurst.biz, we're revolutionizing business operations through
                  cutting-edge AI solutions. Our expertise spans from intelligent
                  automation to advanced machine learning, helping businesses
                  achieve unprecedented efficiency and growth. We combine
                  innovation with practical implementation to deliver real results.
                </p>
                <TextCompanyOverview />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Image
            width={600}
            height={600}
            className="mx-auto rounded-lg shadow-xl"
            src="/images/Ai.jpg"
            alt="AI-powered business automation illustration"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="hidden carousel:grid grid-cols-5 justify-between gap-2 py-4">
        {carouselItems2.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            link={item.link}
            bgcolor="white"
          />
        ))}
      </div>
      <div className="block carousel:hidden py-7">
        <CarouselContainer items={carouselItems} bgcolor="white" />
      </div>
    </section>
  );
};

export default CompanyOverview;
