import React from "react";
import {
  OnDemandCharter,
  GroupCharter,
  AirAmbulance,
  Helicopter,
  EmptyLeg,
  IndustrySpecific,
} from "@/svg";
import CustomComponent from "@/components/CustomComponent";
import { CardInfo } from "@/app/types";

interface ExclusiveServicesProps {
  hasSectionPadding?: boolean;
  hasInlinePadding?: boolean;
}

const ExclusiveServices: React.FC<ExclusiveServicesProps> = ({
  hasSectionPadding,
  hasInlinePadding = true,
}) => {
  let heading: string = "Our AI Solutions & Services";
  let para: string =
    "aiburst.biz.biz delivers cutting-edge AI solutions that transform businesses. From intelligent automation to advanced analytics, we provide comprehensive AI services tailored to your specific needs.";

  const data: CardInfo[] = [
    {
      icon: <OnDemandCharter />,
      title: "AI Workflow Automation",
      description:
        "Streamline operations with intelligent process automation and robotic process automation (RPA)",
      link: "/workflow-automation",
    },
    {
      icon: <GroupCharter />,
      title: "Conversational AI & Chatbots",
      description:
        "Engage customers with AI-powered chatbots and virtual assistants for sales and support",
      link: "/conversational-ai",
    },
    {
      icon: <AirAmbulance />,
      title: "Lead Generation & Verification",
      description:
        "AI-driven insights for accurate targeting and improved conversion rates",
      link: "/lead-generation",
    },
    {
      icon: <Helicopter />,
      title: "Custom AI Model Development",
      description:
        "Tailored machine learning solutions for your unique business challenges",
      link: "/custom-ai-models",
    },
    {
      icon: <EmptyLeg />,
      title: "AI-Powered CRM & ERP",
      description:
        "Integrate AI into your existing systems for enhanced efficiency",
      link: "/crm-erp-integration",
    },
    {
      icon: <IndustrySpecific />,
      title: "Data Analytics & Insights",
      description:
        "Transform your data into actionable insights with AI-powered analytics",
      link: "/data-analytics",
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

export default ExclusiveServices;
