import React from "react";
import { TailoredLuxury } from "@/svg";

const OurComitment = () => {
  return (
    <section className="max-w-[1800px] mx-auto py-20 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Commitment to AI Innovation
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center mb-4 bg-blue-600 w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <TailoredLuxury />
            </div>
            <h3 className="font-bold text-2xl">Continuous Innovation</h3>
            <p className="mt-3 text-gray-600">
              At aiburst.biz.biz, we're committed to staying at the forefront of
              AI technology. Our team continuously researches and implements the
              latest advancements in artificial intelligence, machine learning,
              and automation. We invest in cutting-edge tools and methodologies
              to ensure our clients benefit from the most innovative AI
              solutions available.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center mb-4 bg-blue-600 w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <TailoredLuxury />
            </div>
            <h3 className="font-bold text-2xl">Client Success</h3>
            <p className="mt-3 text-gray-600">
              Your success is our priority. We work closely with each client to
              understand their unique challenges and goals, developing tailored
              AI solutions that deliver measurable results. Our commitment to
              excellence means we provide comprehensive support, training, and
              optimization services to ensure you get the maximum value from
              your AI investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurComitment;
