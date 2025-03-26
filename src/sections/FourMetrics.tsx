import React from "react";

const FourMetrics = () => {
  return (
    <section id="metrics" className="bg-fourMetrics-OurCommitment-background overlay bg-[center_top] md:bg-[center_-80px] bg-no-repeat bg-cover flex items-center justify-center px-10 py-14 md:p-[100px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full text-white max-w-[1800px] mx-auto">
        <div className="text-center">
          <p className="mb-2 text-4xl sm:text-5xl font-bold text-white">500+</p>
          <p className="">AI Solutions Deployed</p>
        </div>
        <div className="text-center">
          <p className="mb-2 text-4xl sm:text-5xl font-bold text-white">98%</p>
          <p className="">Client Satisfaction Rate</p>
        </div>
        <div className="text-center">
          <p className="mb-2 text-4xl sm:text-5xl font-bold text-white">
            70%
          </p>
          <p className="">Average Efficiency Improvement</p>
        </div>
        <div className="text-center">
          <p className="mb-2 text-4xl sm:text-5xl font-bold text-white">50+</p>
          <p className="">Industry Partners</p>
        </div>
      </div>
    </section>
  );
};

export default FourMetrics;
