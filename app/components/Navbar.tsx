"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Logo from "../asset/logo.png"
import Image from "next/image";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [togle, setTogle] = useState<boolean>(false);
  const handeScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", handeScroll);

  const handleTogle = () => {
    setTogle(!togle);
  };

  return (
    <>
      <div
        className={
          isSticky
            ? "z-50 fixed w-full  bg-white/30 backdrop-blur-sm duration-100 shadow-md top-0"
            : "fixed  w-full  duration-100 z-50 top-0"
        }
      >
        <div className="justify-between flex w-full md:px-16 pt-1 text-xl">
          <div className="md:w-1/2  font-semibold">
            <Link href="/"> <Image src={Logo} alt="logo" className="w-16 md:w-20" /></Link>
          </div>
          <div>
            <button className="text-2xl p-3 md:hidden" onClick={handleTogle}>
              {!togle ? <HiMiniBars3BottomRight /> : <IoClose />}
            </button>
          </div>
          <div className="md:w-1/2 p-4 space-x-16 uppercase md:justify-end font-sans hidden md:flex md:items-center">
            <Link href="/juz">Juz</Link>
            <Link href="/surah">Surah</Link>
            <a href="#" className="cursor-not-allowed">Sejarah</a>
            <Link href="/about">
              <button className=" px-4 py-1.5 rounded-md text-base  bg-black hover:text-black hover:bg-transparent hover:border border-black text-white duration-200 ">
                About
              </button>
            </Link>
          </div>
        </div>
        <div className={!togle ? ' bg-white absolute -left-[100%] transition-all duration-200' : ' bg-white absolute transition-all duration-200 left-3 rounded-lg mt-3 drop-shadow-lg'}>
          <Link href="/juz">
            <button onClick={handleTogle} className="w-full ps-3 py-2 border-b text-start">Juz</button>
          </Link>
          <Link href="/surah">
            <button onClick={handleTogle} className="w-full ps-3 py-2 border-b text-start">Surah</button>
          </Link>
          <a href="#" className="cursor-not-allowed">
            <button onClick={handleTogle} className="w-full ps-3 py-2 border-b text-start">Sejarah</button>
          </a>
          <Link href="/about">
            <button onClick={handleTogle} className="w-full ps-3 py-2 text-start">About</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
