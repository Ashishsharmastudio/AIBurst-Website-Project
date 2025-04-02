import React from "react";

interface WhatOurClientsSayProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const WhatOurClientsSay: React.FC<WhatOurClientsSayProps> = ({
  hasSectionPadding,
  hasInlinePadding = true,
}) => {
  const testimonials = [
    {
      text: "AIBurst.biz's AI workflow automation transformed our operations. We reduced manual tasks by 70% and improved accuracy significantly. Their team's expertise in AI implementation was invaluable.",
      client: "Financial Services Company",
      location: "Dubai, UAE",
    },
    {
      text: "The conversational AI solution they implemented for our customer service has reduced response times by 85% while maintaining high customer satisfaction. Their AI models are incredibly accurate.",
      client: "E-commerce Platform",
      location: "Singapore",
    },
    {
      text: "Their AI-powered lead generation system has revolutionized our sales process. We've seen a 200% increase in qualified leads and significantly improved conversion rates.",
      client: "B2B Software Company",
      location: "London, UK",
    },
    {
      text: "The predictive analytics dashboard they developed gives us real-time insights into market trends. It's helped us make data-driven decisions that have increased our revenue by 45%.",
      client: "Retail Chain",
      location: "New York, USA",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`overlay bg-[url(/images/ai-testimonials-bg.jpg)] bg-center bg-cover flex flex-col items-center min-h-screen justify-center ${
        hasSectionPadding === false ? "!py-10" : ""
      }`}
    >
      <div
        className={`max-w-[1800px] mx-auto ${
          hasInlinePadding ? "px-5 md:px-10 lg:px-20" : "px-5 md:px-10 xl:px-20"
        } `}
      >
        <h2 className="text-center text-white pb-7">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white bg-opacity-10 backdrop-blur-lg text-white p-6 rounded-lg border-2 border-blue text-[15px] hover:bg-opacity-20 transition-all duration-300"
            >
              <p className="mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.client}</p>
                <p className="text-sm opacity-80">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
