import React, { Suspense } from "react";
import Markdown from "markdown-to-jsx";

type HeroProps = {
  image?: string;
  video?: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  hasOverlay?: boolean;
  hasCalculator?: boolean;
  showCalculator?: string;
};

const Hero: React.FC<HeroProps> = ({
  image,
  video,
  title,
  subtitle,
  tagline,
  description,
  hasOverlay,
  hasCalculator,
  showCalculator = "LeadForm",
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-[65vh] md:min-h-[75vh] ${
        hasCalculator ? "xl:pb-5 pt-5" : "pb-5 sm:pb-10"
      } ${
        hasOverlay ? "overlay" : ""
      } bg-center bg-cover text-center text-white bg-no-repeat relative overflow-hidden`}
      style={{ backgroundImage: video ? "none" : `url('${image}')` }}
    >
      {video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="w-full max-w-[1800px] mx-auto px-5 mb-6 md:px-10 xl:px-20 relative z-10">
        <p className="mb-1 subtitle text-blue-400">{subtitle}</p>
        <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
        <p className={`${tagline ? "TitleTtagline mb-5 text-xl md:text-2xl" : "hidden"}`}>
          {tagline}
        </p>
        <div className={`${description ? "mb-5" : "hidden"}`}>
          <Markdown
            options={{
              forceBlock: true,
              overrides: {
                p: {
                  props: {
                    className: "TitleTtagline text-lg md:text-xl",
                  },
                },
                a: {
                  props: {
                    className: `TitleTtagline text-white hover:text-blue-400 transition-colors`,
                  },
                },
              },
            }}
          >
            {description as string}
          </Markdown>
        </div>
        {hasCalculator && (
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Get Started with AI
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
