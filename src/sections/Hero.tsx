import React from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

type HeroProps = {
  image: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  description?: string;
  hasOverlay?: boolean;
  hasCalculator?: boolean;
};

const Hero: React.FC<HeroProps> = ({
  image,
  title,
  subtitle,
  tagline,
  description,
  hasOverlay = true,
  hasCalculator,
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Next/Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt="AI Technology Visualization"
          fill
          priority
          className="object-cover opacity-90"
          quality={100}
        />
        {hasOverlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        )}
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
        <p className="mb-4 text-white text-lg md:text-xl font-semibold tracking-wider animate-fadeIn">
          {subtitle}
        </p>
        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slideUp">
          {title}
        </h1>
        <p className={`${
          tagline 
            ? "text-xl text-white md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slideUp delay-200" 
            : "hidden"
        }`}>
          {tagline}
        </p>
        <div className={`${description ? "mb-8 animate-fadeIn delay-300" : "hidden"}`}>
          <Markdown
            options={{
              forceBlock: true,
              overrides: {
                p: {
                  props: {
                    className: "text-lg md:text-xl text-blue-100",
                  },
                },
                a: {
                  props: {
                    className: "text-blue-400 hover:text-blue-300 transition-colors",
                  },
                },
              },
            }}
          >
            {description as string}
          </Markdown>
        </div>
        {hasCalculator && (
          <div className="mt-8 animate-fadeIn delay-400">
            <button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1">
              Get Started with AI
            </button>
          </div>
        )}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;

// Add these animations to your globals.css
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slideUp {
  animation: slideUp 1s ease-out forwards;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}
*/
