import Image from "next/image";
import Link from "next/link";
import React from "react";

type PageProps = {
  sectionClass?: string;
  heading?: string;
  subHeading?: string;
};

const AvailableAircrafts = ({
  sectionClass = "",
  heading = "Industries We Serve",
  subHeading = "We help businesses across industries harness the power of AI for transformative growth.",
}: PageProps) => {
  const industries = [
    {
      image: "/images/finance-industry.jpg",
      type: "Finance & Insurance",
      name: "AI Solutions for Financial Services",
      description: "Fraud detection, AI-driven risk assessment, automated claims processing, and intelligent compliance monitoring.",
      seats: "Risk Management",
      range: "Compliance",
      speed: "Automation",
      price: "Starting at ₹35,000",
    },
    {
      image: "/images/healthcare-industry.jpg",
      type: "Healthcare & Clinical Research",
      name: "Healthcare AI Solutions",
      description: "AI-based diagnostics, patient engagement, trial automation, and predictive healthcare analytics.",
      seats: "Diagnostics",
      range: "Research",
      speed: "Analytics",
      price: "Starting at ₹45,000",
    },
    {
      image: "/images/ecommerce-industry.jpg",
      type: "E-commerce & Retail",
      name: "Retail AI Solutions",
      description: "Smart chatbots, AI-powered recommendations, inventory forecasting, and personalized shopping experiences.",
      seats: "Customer Service",
      range: "Inventory",
      speed: "Personalization",
      price: "Starting at ₹25,000",
    },
    {
      image: "/images/realestate-industry.jpg",
      type: "Real Estate & Interiors",
      name: "Real Estate AI Solutions",
      description: "AI-powered lead verification, market trend analysis, property automation, and virtual property tours.",
      seats: "Lead Generation",
      range: "Market Analysis",
      speed: "Automation",
      price: "Starting at ₹30,000",
    },
    {
      image: "/images/b2b-industry.jpg",
      type: "B2B & SaaS",
      name: "B2B AI Solutions",
      description: "CRM automation, predictive analytics, sales funnel optimization, and intelligent lead scoring.",
      seats: "Sales",
      range: "Analytics",
      speed: "Automation",
      price: "Starting at ₹40,000",
    },
  ];

  return (
    <section className={`${sectionClass} py-20 px-5 md:px-10 lg:px-20`}>
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{heading}</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          {subHeading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <div
                className="bg-cover bg-no-repeat bg-center h-56 flex justify-center items-end"
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <div className="text-white grid grid-cols-3 mb-2 gap-2 px-2">
                  <div className="text-center px-3 py-4 flex-1 bg-[#202b349d]">
                    <h4 className="font-bold leading-tight">Focus</h4>
                    <p className="text-sm">{industry.seats}</p>
                  </div>
                  <div className="text-center py-4 flex-1 bg-[#202b349d]">
                    <h4 className="font-bold leading-tight">Scope</h4>
                    <p className="text-sm">{industry.range}</p>
                  </div>
                  <div className="text-center px-3 py-4 flex-1 bg-[#202b349d]">
                    <h4 className="font-bold leading-tight">Impact</h4>
                    <p className="text-sm">{industry.speed}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800">
                <div>
                  <h3 className="text-white font-bold mb-4">{industry.type}</h3>
                  <p className="mb-3 font-bold text-white text-[16px]">
                    {industry.name}
                  </p>
                  <p className="mb-4 text-gray-300 text-base">
                    {industry.description}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-xs md:text-sm gap-3">
                  <Link
                    href="/contact"
                    className="text-white px-3 py-2 md:py-3 min-w-fit w-2/5 md:w-[35%] rounded-full bg-gradient-to-r from-blue-600 to-blue-700 transition-all ease-linear hover:-translate-y-1 text-center text-xs sm:text-sm hover:shadow-card_shadow"
                  >
                    GET STARTED →
                  </Link>
                  <p className="text-white font-bold">{industry.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableAircrafts;
