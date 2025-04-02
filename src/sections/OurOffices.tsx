import React from "react";
import { OurOfficesSvg } from "@/svg";

const OurOffices = () => {
  return (
    <section id="contact" className="bg-cover bg-center h-screen max-h-[900px] overflow-hidden bg-ourOffices-background overlay p-0 flex items-center">
      <div className="max-w-[1800px] w-full mx-auto px-5 md:px-32 flex flex-col text-white justify-center">
        <h2 className="mb-4 text-white">Our Office</h2>

        <div className="grid grid-cols-1 gap-5 md:flex md:flex-row md:justify-center">
          <div className="text-left">
            <div className="flex justify-center items-center mb-4 bg-blue w-20 lg:w-28 h-20 lg:h-28 rounded-full">
              <OurOfficesSvg />
            </div>
            <h3 className="font-bold text-3xl">Hyderabad</h3>
            <p className="mt-3 text-lg">
              <a href="https://maps.app.goo.gl/example-hyderabad">
                C405, Salarpuria Sattva Magnus
                <br />
                Shaikpet, Hyderabad – 500008
              </a>
              <br />
              <span className="text-white">+91 9908888019</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
