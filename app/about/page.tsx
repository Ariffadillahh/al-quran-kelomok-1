import Image from "next/image";
import React from "react";
import orang1 from "../asset/orang1.jpeg";
import orang2 from "../asset/orang2.jpeg";
import orang3 from "../asset/orang3.jpeg";
import orang4 from "../asset/orang4.jpeg";
import orang5 from "../asset/orang5.jpeg";

const page = () => {
  return (
    <div className="px-3 md:px-10 pt-[70px]">
      <div>
        <div className="w-full h-full md:py-20 py-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-green-900 dark:text-green-900">
            Our Team
          </h1>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 my-5">
            <Image src={orang1} alt="Orang 1" />
            <Image src={orang2} alt="Orang 1" />
            <Image src={orang3} alt="Orang 1" />
            <Image src={orang4} alt="Orang 1" />
            <Image src={orang5} alt="Orang 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
