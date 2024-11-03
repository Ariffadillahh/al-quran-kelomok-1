import React from "react";
import { Card, Carousel } from "../components/ui/apple-cards-carousel";
import img from "../asset/ngaji.png";

const page = () => {
  const data = [
    {
      category: "2407411007",
      title: "Arif Fadillah Wicaksono",
      src: img,
      content:
        "Saya adalah mahasiswa PNJ. Kelas TI - 1A",
    },
    {
      category: "2407411005",
      title: "Ulya Sara",
      src: img,
      content:
        "Saya adalah mahasiswa PNJ. Kelas TI - 1A",
    },
    {
      category: "2407411027",
      title: "Putri Rahma Farahdiba", 
      src: img,
      content:
        "Saya adalah mahasiswa PNJ. Kelas TI - 1A",
    },

    {
      category: "2407411011",
      title: "Novita Syaifani",
      src: img,
      content:
        "Saya adalah mahasiswa PNJ. Kelas TI - 1A",
    },
    {
      category: "2407411001",
      title: "Daffa Syarif",
      src: img,
      content:
        "Saya adalah mahasiswa PNJ. Kelas TI - 1A",
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.category} card={card} index={index} />
  ));

  return (
    <div className="px-3 md:px-10 pt-[70px]">
      <div>
        <div className="w-full h-full md:py-20 py-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl text-center font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-black to-green-900">
            Our Team
          </h1>
          <Carousel items={cards} />
        </div>
      </div>
    </div>
  );
};

export default page;
