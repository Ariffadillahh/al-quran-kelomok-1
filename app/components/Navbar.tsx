"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Logo from "../asset/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className={
          isSticky
            ? "z-50 fixed w-full  bg-white/30 dark:bg-black/30 backdrop-blur-sm duration-100 shadow-md top-0"
            : "fixed  w-full  duration-100 z-50 top-0"
        }
      >
        <div className="justify-between flex w-full md:px-16 pt-1 text-xl items-center">
          <div className="md:w-1/2  font-semibold">
            <Link href="/">
              {" "}
              <Image src={Logo} alt="logo" className="w-16 md:w-20" />
            </Link>
          </div>
          <div>
            <button className="text-3xl px-3  md:hidden " onClick={handleToggle}>
              {!toggle ? <HiMiniBars3BottomRight /> : <IoClose />}
            </button>
          </div>
          <div className="md:w-1/2 p-4 space-x-16 uppercase md:justify-end font-sans hidden md:flex md:items-center">
            <Link href="/juz">Juz</Link>
            <Link href="/surah">Surah</Link>
            <Link href="/about">
              <button className=" px-4 py-1.5 rounded-md text-base  border-2 text-green-900 border-green-900  duration-200 ">
                About
              </button>
            </Link>
          </div>
        </div>
        <div
          className={
            !toggle
              ? " bg-white absolute -left-[100%] transition-all duration-200 dark:bg-gray-900"
              : " bg-white absolute transition-all duration-200 left-3 rounded-lg mt-3 drop-shadow-lg dark:bg-gray-900 dark:text-white"
          }
        >
          <Link href="/juz">
            <button
              onClick={handleToggle}
              className="w-full ps-3 py-2 border-b text-start"
            >
              Juz
            </button>
          </Link>
          <Link href="/surah">
            <button
              onClick={handleToggle}
              className="w-full ps-3 py-2 border-b text-start"
            >
              Surah
            </button>
          </Link>
          <Link href="/about">
            <button
              onClick={handleToggle}
              className="w-full ps-3 py-2 text-start"
            >
              About
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
