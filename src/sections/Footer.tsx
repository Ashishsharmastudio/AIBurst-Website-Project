import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

type Section = {
  title: string;
  links: { title: string; link: string }[];
};

const Footer = () => {
  const sections: Section[] = [
    {
      title: "AI Solutions",
      links: [
        { title: "Workflow Automation", link: "/workflow-automation" },
        { title: "Conversational AI", link: "/conversational-ai" },
        { title: "Lead Generation", link: "/lead-generation" },
        { title: "Custom AI Models", link: "/custom-ai-models" },
        { title: "Data Analytics", link: "/data-analytics" },
        { title: "AI Integration", link: "/ai-integration" },
        { title: "AI Consulting", link: "/ai-consulting" },
      ],
    },
    {
      title: "Industries",
      links: [
        { title: "Healthcare", link: "/industries/healthcare" },
        { title: "Pharma", link: "/industries/pharma" },
        { title: "Education", link: "/industries/education" },
        { title: "Real Estate", link: "/industries/real-estate" },
        { title: "Print Media", link: "/industries/print-media" }
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "AI Case Studies", link: "/resources/case-studies" },
        { title: "AI Whitepapers", link: "/resources/whitepapers" },
        { title: "AI Blog", link: "/resources/blog" },
        { title: "AI Glossary", link: "/resources/glossary" },
        { title: "AI Events", link: "/resources/events" },
        { title: "AI Training", link: "/resources/training" },
        { title: "AI Documentation", link: "/resources/documentation" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", link: "/about" },
        { title: "Our Team", link: "/team" },
        { title: "Careers", link: "/careers" },
        { title: "Partners", link: "/partners" },
        { title: "Contact", link: "/contact" },
        { title: "Privacy Policy", link: "/privacy" },
        { title: "Terms of Service", link: "/terms" },
      ],
    },
  ];

  return (
    <section className="bg-black pt-5 px-5 md:px-10 lg:px-20 pb-0">
      <div className="max-w-[1800px] mx-auto pt-10 text-[#f0f1f2]">
        <div className="pb-4 flex flex-col justify-between w-fit mx-auto min-[1180px]:w-full min-[1180px]:m-0 min-[1180px]:flex-row gap-5">
          <div className="mb-4 min-[1180px]:mb-8">
            <h1 className="text-3xl font-bold">aiburst.biz</h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-7">
            <div className="flex flex-col lg:flex-row lg:items-center lg:h-[54px] gap-4 pb-0 lg:pb-0">
              <h4 className="text-lg text-center m-0">Connect with us</h4>
              <div className="flex gap-6 items-center mx-auto">
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585] hover:text-blue-400 hover:border-blue-400 transition-colors"
                  href="#"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585] hover:text-blue-400 hover:border-blue-400 transition-colors"
                  href="#"
                >
                  <FaXTwitter />
                </a>
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585] hover:text-blue-400 hover:border-blue-400 transition-colors"
                  href="#"
                >
                  <FaInstagram />
                </a>
                <a
                  className="border border-[#858585] rounded-full p-2 text-[#858585] hover:text-blue-400 hover:border-blue-400 transition-colors"
                  href="#"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`bg-[#202020] py-8 border-b border-black lg:flex items-baseline ${
              index === 0 ? "rounded-[20px_20px_0px_0px]" : ""
            }`}
          >
            <div className="lg:w-1/4 pb-4">
              <h4 className="font-playfair tracking-widest text-[15px] lg:w-fit px-8 lg:pl-[25%] lg:pr-0">
                {section.title}
              </h4>
            </div>
            <ul className="list-none lg:w-3/4 pl-8 pr-4 lg:pr-12 lg:pl-0 text-sm">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="inline">
                  <Link
                    href={link.link}
                    className="text-[#858585] leading-7 hover:text-blue-400 mr-2 inline-flex transition-colors"
                  >
                    {link.title}
                  </Link>
                  {linkIndex !== section.links.length - 1 && (
                    <span className="text-[#858585] mr-2 hidden sm:inline">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative">
        <hr className="-ml-5 md:-ml-20 border-[#858585] absolute w-[calc(100%_+40px)] md:w-[calc(100%_+120px)] lg:w-[calc(100%_+160px)]" />
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row text-[#f0f1f2] gap-5 mt-8 py-4">
          <div className="flex items-center justify-start gap-3">
            <div className="flex gap-5 flex-col text-[11px]">
              <div>&copy; 2024 aiburst.biz. All rights reserved.</div>
              <div className="flex flex-row gap-3 lg:mx-0">
                <Link
                  href="/privacy"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <p className="flex-1 text-[#858585] text-[9px]">
            aiburst.biz is committed to responsible AI development and
            deployment. Our solutions adhere to global AI ethics guidelines and
            data protection regulations. We continuously innovate to provide
            cutting-edge AI solutions while maintaining the highest standards of
            security and privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
