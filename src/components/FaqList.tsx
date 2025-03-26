"use client";
import { useState, useRef, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "How quickly can you implement AI solutions in our business?",
    answer:
      "Our rapid deployment process typically takes 2-4 weeks for initial AI implementation, depending on the complexity of your requirements. We follow an agile methodology with regular checkpoints to ensure smooth integration and immediate value delivery.",
  },
  {
    question: "What AI technologies and frameworks do you use?",
    answer:
      "We leverage cutting-edge AI technologies including machine learning, natural language processing, and computer vision. Our stack includes TensorFlow, PyTorch, and custom AI models. We also integrate with popular cloud platforms like AWS, Azure, and Google Cloud for scalable AI solutions.",
  },
  {
    question: "How do you ensure data security and privacy in AI solutions?",
    answer:
      "We implement enterprise-grade security measures including end-to-end encryption, secure data handling protocols, and compliance with GDPR, CCPA, and other relevant regulations. Our AI solutions are designed with privacy-by-design principles and regular security audits.",
  },
  {
    question: "Can you customize AI solutions for our specific industry?",
    answer:
      "Yes, we specialize in industry-specific AI solutions. Our team has extensive experience across sectors including finance, healthcare, retail, and manufacturing. We develop custom AI models trained on your industry data to deliver targeted solutions that address your unique challenges.",
  },
];

const FaqList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (openIndex !== null && faqRefs.current[openIndex]) {
      faqRefs.current[openIndex]!.style.height = `${
        faqRefs.current[openIndex]!.scrollHeight
      }px`;
    }
    faqRefs.current.forEach((faq, idx) => {
      if (idx !== openIndex && faq) {
        faq.style.height = "0px";
      }
    });
  }, [openIndex]);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="lg:absolute mt-5 lg:mt-0 left-[40%] top-10">
      {faqData.map((faq, index) => (
        <div key={index} className="bg-gray-100 px-3 py-1 mb-3">
          <h3
            className="flex items-center justify-between font-bold text-darkBlue cursor-pointer mb-2"
            onClick={() => toggleFaq(index)}
          >
            {faq.question} <FaCaretDown />
          </h3>
          <div
            ref={(el) => {
              faqRefs.current[index] = el;
            }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ height: "0px" }}
          >
            <p className="text-gray-800">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
