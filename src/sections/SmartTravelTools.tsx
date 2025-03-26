import React from "react";
import {
  Routes_DistanceCalculator,
  CostCalculator,
  FlightTracker,
} from "@/svg";
import CustomComponent from "@/components/CustomComponent";
import { CardInfo } from "@/app/types";

interface SmartTravelToolsProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const SmartTravelTools: React.FC<SmartTravelToolsProps> = ({
  hasSectionPadding,
  hasInlinePadding = true,
}) => {
  let heading: string = "AI-Powered Business Tools";
  let para: string =
    "Optimize your business operations with our suite of AI-powered tools. From intelligent automation to predictive analytics, our solutions help you make data-driven decisions and streamline workflows.";

  const data: CardInfo[] = [
    {
      icon: <CostCalculator />,
      title: "AI Process Optimizer",
      description:
        "Analyze and optimize your business processes with AI-driven insights",
      link: "/process-optimization",
    },
    {
      icon: <FlightTracker />,
      title: "Predictive Analytics Dashboard",
      description:
        "Track key metrics and forecast trends with AI-powered analytics",
      link: "/predictive-analytics",
    },
    {
      icon: <Routes_DistanceCalculator />,
      title: "Intelligent Workflow Designer",
      description: "Design and automate complex workflows with AI assistance",
      link: "/workflow-designer",
    },
  ];

  return (
    <CustomComponent
      heading={heading}
      para={para}
      background="white"
      items={data}
      hasPadding={hasSectionPadding}
      hasInlinePadding={hasInlinePadding}
    />
  );
};

export default SmartTravelTools;
