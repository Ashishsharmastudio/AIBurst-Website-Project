import React from "react";
import {
  RequestQuote,
  ReceiveCharterProposal,
  ConfirmAircraft,
  ReceiveFlightBrief,
} from "@/svg";

const CharterProcessSteps = () => {
  const steps = [
    {
      icon: <RequestQuote />,
      title: "Initial Assessment",
      description:
        "We begin with a comprehensive analysis of your business processes, identifying opportunities for AI implementation and automation. Our experts evaluate your current workflows and data to create a tailored AI roadmap.",
    },
    {
      icon: <ReceiveCharterProposal />,
      title: "Solution Design",
      description:
        "Our team develops a detailed AI implementation plan, including specific solutions, integration points, and expected outcomes. We design custom AI models and automation workflows that align with your business goals.",
    },
    {
      icon: <ConfirmAircraft />,
      title: "Implementation & Integration",
      description:
        "We seamlessly integrate AI solutions into your existing systems, ensuring minimal disruption to your operations. Our team handles everything from data preparation to system integration and testing.",
    },
    {
      icon: <ReceiveFlightBrief />,
      title: "Optimization & Support",
      description:
        "Continuous monitoring and optimization of your AI solutions, with regular performance reviews and updates. We provide ongoing support and training to ensure you get the maximum value from your AI investments.",
    },
  ];

  return (
    <section className="max-w-[1800px] mx-auto flex flex-col items-center py-20 px-5 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Our AI Implementation Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharterProcessSteps;
