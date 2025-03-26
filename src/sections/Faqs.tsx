import FaqList from '@/components/FaqList';
import Image from 'next/image';

const Faqs = () => {
    return (
      <section id="faq" className="max-w-[1800px] mx-auto min-h-screen flex flex-col justify-center px-5 md:px-10 lg:px-20">
        <h4 className="text-center text-lightBlue font-bold mb-2">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <h2 className="text-center font-bold mb-8">
          AI Solutions & Services
        </h2>
        <div className="flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 w-full md:min-w-[600px] md:my-auto">
            <Image
              src="/images/ai-faq.jpg"
              alt="AI technology visualization showing connected nodes and data flow"
              width={700}
              height={475}
              className="w-full h-full rounded-lg shadow-xl"
            />
          </div>
          <FaqList />
        </div>
      </section>
    );
};

export default Faqs;
