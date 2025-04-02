import React from "react";
import {
  OnDemandCharter,
  ProvenSafetyRecords,
  Reliability,
  Transparency,
  Testimonials,
} from "@/svg";
import CustomComponent from "@/components/CustomComponent";
import { CardInfo } from "@/app/types";

const AboutUs = () => {
  let heading: string =
    "Why Choose AIBurst.biz for Your AI Transformation?";
  let para: string =
    "AIBurst.biz is your trusted partner in AI innovation and automation. With deep expertise in artificial intelligence, machine learning, and process automation, we help businesses of all sizes implement solutions that drive growth, reduce costs, and enhance customer experiences. Our commitment to innovation and practical implementation ensures real results for your business.";

  const data: CardInfo[] = [
    {
      icon: <OnDemandCharter />,
      title: "AI-First Approach",
      description:
        "We embed intelligence into your workflows, not just add AI as an afterthought",
      link: "/ai-first-approach",
    },
    {
      icon: <ProvenSafetyRecords />,
      title: "Custom Solutions",
      description:
        "Tailored AI solutions designed specifically for your business needs",
      link: "/custom-solutions",
    },
    {
      icon: <Reliability />,
      title: "Scalable & Future-Ready",
      description:
        "AI solutions that grow with your business and adapt to future needs",
      link: "/scalable-solutions",
    },
    {
      icon: <Transparency />,
      title: "Proven Expertise",
      description:
        "Our AI specialists ensure successful implementation from concept to execution",
      link: "/expertise",
    },
    {
      icon: <Testimonials />,
      title: "Industry Recognition",
      description:
        "Trusted by businesses across industries for AI transformation",
      link: "/recognition",
    },
  ];

  return (
    <CustomComponent
      heading={heading}
      para={para}
      background="image"
      items={data}
    />
  );
};

export default AboutUs;
