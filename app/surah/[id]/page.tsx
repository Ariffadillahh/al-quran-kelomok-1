"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

interface Params {
  id: string;
}

const Page = ({ params }: { params: Params }) => {
  const [surah, setSurah] = useState<any[]>([]);
  const [allSurah, setAllSurah] = useState<any[]>([]);
  const [prevSurah, setPrevSurah] = useState<any | null>(null);
  const [nextSurah, setNextSurah] = useState<any | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const fetchSurah = async () => {
    const apiUrl = `https://api.alquran.cloud/v1/surah/${params.id}/editions/quran-uthmani,id.indonesian`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSurah(data.data);
    } catch (error) {
      console.error("Error fetching surah:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    const apiUrl = "http://api.alquran.cloud/v1/surah";
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setAllSurah(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSurah();
    fetchData();
  }, [params.id]);

  const prev = () => {
    const currentId = parseInt(params.id);
    const previousSurah = allSurah.find((f) => f.number === currentId - 1);
    if (previousSurah) {
      setPrevSurah(previousSurah);
    }
  };

  const next = () => {
    const currentId = parseInt(params.id);
    const nextSurah = allSurah.find((f) => f.number === currentId + 1);
    if (nextSurah) {
      setNextSurah(nextSurah);
    }
  };

  useEffect(() => {
    if (allSurah.length > 0) {
      prev();
      next();
    }
  }, [allSurah, params.id]);

  useEffect(() => {
    const cekTinggi = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", cekTinggi);
    return () => window.removeEventListener("scroll", cekTinggi);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center text-xl">
        Loading...
      </div>
    );
  }

  if (!surah || surah.length < 2) {
    return (
      <div className="h-screen w-full flex justify-center items-center text-xl">
        API Error
      </div>
    );
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:pt-[70px] pt-[50px]">
      <div
        className={
          isSticky
            ? "fixed right-3 bottom-8 text-slate-500 duration-100"
            : "fixed left-[100%] bottom-8 duration-100 text-slate-500"
        }
      >
        <button onClick={scrollTop}>
          <IoIosArrowDropup size={40} />
        </button>
      </div>
      <div className="px-3 md:px-20 grid grid-cols-3">
        <div>
          {prevSurah && (
            <div className="text-left my-4 text-slate-600/60 underline">
              <h2 className="text-xs md:text-lg">
                <Link href={`/surah/${prevSurah.number}`}>
                  {prevSurah.englishName}
                  <br />
                  <span className="md:text-sm text-xs truncate">
                    {prevSurah.englishNameTranslation}
                  </span>
                </Link>
              </h2>
            </div>
          )}
        </div>
        <div className="my-3 border-b-2 border-blue-500">
          <h2 className="text-center text-lg md:text-2xl lg:text-3xl font-bold">
            {surah[0].englishName}
          </h2>
          <h2 className="text-center md:text-base text-sm md:mb-2">
            {surah[0].englishNameTranslation}
          </h2>
        </div>
        <div>
          {nextSurah && (
            <div className="text-right my-4 text-slate-600/60 underline">
              <h2 className="text-xs md:text-lg">
                <Link href={`/surah/${nextSurah.number}`}>
                  {nextSurah.englishName}
                  <br />
                  <span className="md:text-sm text-xs truncate">
                    {nextSurah.englishNameTranslation}
                  </span>
                </Link>
              </h2>
            </div>
          )}
        </div>
      </div>

      {surah[0].englishName === "Al-Faatiha" ||
      surah[0].englishName === "At-Tawba" ? (
        <></>
      ) : (
        <h1 className="text-xl md:text-2xl text-center font-semibold my-5">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </h1>
      )}

      {surah[0].ayahs.map((ayahArab, index) => {
        const ayahText =
          surah[0].englishName === "Al-Faatiha" && ayahArab.numberInSurah === 1
            ? ayahArab.text // Jika surah adalah "Al-Faatiha" dan ini ayat pertama, tampilkan teks asli (termasuk Bismillah)
            : ayahArab.numberInSurah === 1
            ? ayahArab.text
                .replace(/بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ/, "")
                .trim() // Jika bukan "Al-Faatiha" tetapi ayat pertama, hapus Bismillah
            : ayahArab.text;

        const ayahTranslation = surah[1].ayahs[index];

        return (
          <div
            key={ayahArab.number}
            className="odd:bg-slate-100/60 even:white px-3 md:px-20 py-3"
          >
            <div className="flex justify-between">
              <h2 className="font-semibold text-slate-500 text-lg md:text-xl lg:text-2xl text-start my-2 mr-2">
                {ayahArab.numberInSurah}.
              </h2>
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-end my-2">
                {ayahText}
              </h2>
            </div>
            <p className="text-xs md:text-sm lg:text-base text-left my-2">
              {ayahTranslation.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
