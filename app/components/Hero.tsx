import React from "react";
import img from "../asset/ngaji.png";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FlipWords } from "./ui/flip-word";

const Hero = () => {
  const words = [
    "Membaca",
    "Mendalami",
    "Memahami",
    "Mempelajari",
  ];
  return (
    <div className="px-3 md:px-10 pt-[70px] md:pt-[40px] ">
      <div className="md:flex  mb-10 items-center mt-7">
        <div className="md:ml-10  md:w-1/2">
          <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Marilah<span className="italic "><FlipWords words={words} /></span>Al&apos;Quran.
          </h1>
          <p className="mb-8 text-base font-normal ">
            Temukan kemudahan dalam membaca ayat-ayat suci, tafsir, dan
            terjemahan langsung dari perangkat Anda.
          </p>
          <Link href="/surah">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Mulai Mengaji{" "}
              <span className="ml-2">
                <FaLongArrowAltRight />
              </span>
            </button>
          </Link>
        </div>
        <div className="md:flex justify-end hidden md:w-1/2">
          <Image src={img} alt="Mengaji" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
