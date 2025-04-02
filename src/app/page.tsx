import Hero from "@/sections/Hero";
// import BrandNames from "@/sections/BrandNames";
import CompanyOverview from "@/sections/CompanyOverview";
import AboutUs from "@/sections/AboutUs";
import ExclusiveServices from "@/sections/ExclusiveServices";
import OurOffices from "@/sections/OurOffices";
import CharterProcessSteps from "@/sections/CharterProcessSteps";
import FourMetrics from "@/sections/FourMetrics";
import SmartTravelTools from "@/sections/SmartTravelTools";
import OurComitment from "@/sections/OurComitment";
import PopularPrivateJetCharters from "@/sections/PopularPrivateJetCharters";
import AvailableAircrafts from "@/sections/AvailableAircrafts";
import WhatOurClientsSay from "@/sections/WhatOurClientsSay";
import Faqs from "@/sections/Faqs";

export const metadata = {
  title: "AI-Powered Automation for Smarter Business Growth | AIBurst.biz",
  description:
    "Transform your business with AI-driven solutions. From intelligent chatbots to workflow automation, AIBurst.biz helps businesses eliminate inefficiencies and scale effortlessly.",
};

export default function Home() {
  const IconsItems = [
    {
      icon: "Routes_DistanceCalculator",
      title: "AI Workflow Automation",
      description:
        "Optimize operations & reduce manual tasks with intelligent automation.",
      bgcolor: "white",
    },
    {
      icon: "UsCanadaCities",
      title: "Conversational AI & Chatbots",
      description: "AI-powered interactions for sales, support & more.",
      bgcolor: "white",
    },
    {
      icon: "InternationalCities",
      title: "Lead Generation & Verification",
      description: "AI-driven insights for accurate targeting and conversion.",
      bgcolor: "white",
    },
    {
      icon: "Aircraft",
      title: "Custom AI Model Development",
      description: "Advanced machine learning tailored to your specific needs.",
      bgcolor: "white",
    },
    {
      icon: "Airports",
      title: "Data Analytics & Insights",
      description:
        "Make smarter decisions with AI-powered predictive analytics.",
      bgcolor: "white",
    },
  ];

  return (
    <>
      <Hero
        image="/images/Picture1.png"
        title="AI-Powered Automation for Smarter Business Growth"
        subtitle="Transform Your Business with AI"
        tagline="Eliminate inefficiencies, optimize workflows, and scale effortlessly with cutting-edge AI solutions."
        hasCalculator={true}
        hasOverlay={true}
      />
      {/* <BrandNames /> */}
      <CompanyOverview
        heading="Transforming Business with AI Innovation"
        collapseText={true}
        description={
          "At AIBurst.biz, we believe in efficiency, intelligence, and automation. Our AI-driven solutions help businesses eliminate manual tasks, enhance decision-making, and unlock growth potential. With deep expertise in AI, machine learning, and process automation, we work with businesses of all sizes to implement solutions that reduce costs, improve productivity, and enhance customer experiences."
        }
        IconsItems={IconsItems}
      />
      <AboutUs />
      <ExclusiveServices />
      <OurOffices />
      <CharterProcessSteps />
      <SmartTravelTools />
      <OurComitment />
      <PopularPrivateJetCharters />
      <FourMetrics />
      <AvailableAircrafts
        heading="Industries We Serve"
        subHeading="We help businesses across industries harness the power of AI for transformative growth."
      />
      <WhatOurClientsSay />
      <Faqs />
    </>
  );
}
