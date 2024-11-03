"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

interface Params {
  id: string;
}

interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
  surah: Surah;
  textUthmani?: string; // Tambahkan ini jika perlu
}

interface Surah {
  number: number;
  englishName: string;
  englishNameTranslation: string;
}

const Page = ({ params }: { params: Params }) => {
  const [ayahsCombain, setAyahsCombain] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    getAyahsCombined();
  }, [params.id]);

  const getAyahsCombined = async () => {
    try {
      const apiIndonesian = `https://api.alquran.cloud/v1/juz/${params.id}/id.indonesian`;
      const apiUthmani = `https://api.alquran.cloud/v1/juz/${params.id}/quran-uthmani`;

      const [resIndo, resUthmani] = await Promise.all([
        fetch(apiIndonesian),
        fetch(apiUthmani),
      ]);

      const dataIndo = await resIndo.json();
      const dataUthmani = await resUthmani.json();

      const combinedAyahs = dataIndo.data.ayahs.map(
        (ayah: Ayah[], index: number) => ({
          ...ayah,
          textUthmani: dataUthmani.data.ayahs[index]?.text,
        })
      );

      setAyahsCombain(combinedAyahs);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const id = parseInt(params.id);
  const next = id + 1;
  const prev = id - 1;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cekTinggi = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", cekTinggi);
    return () => window.removeEventListener("scroll", cekTinggi);
  }, []);

  return (
    <div className="md:pt-[70px] pt-[50px]">
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div>
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

          <div className="flex justify-between mx-3 md:mx-20 my-3">
            <div>
              {id > 1 && (
                <Link
                  className="underline text-xs md:text-base lg:text-lg"
                  href={`/juz/${prev}`}
                >
                  Juz {prev}
                </Link>
              )}
            </div>
            <div>
              {id < 30 && (
                <Link
                  className="underline text-xs md:text-base lg:text-lg"
                  href={`/juz/${next}`}
                >
                  Juz {next}
                </Link>
              )}
            </div>
          </div>

          {ayahsCombain.length > 0 && (
            <div>
              {ayahsCombain.map((ayah, index) => {
                const isNewSurah =
                  ayah.numberInSurah === 1 ||
                  (index > 0 &&
                    ayah.surah.number !== ayahsCombain[index - 1].surah.number);

                const ayahText =
                  ayah.surah.englishName === "Al-Faatiha" &&
                  ayah.numberInSurah === 1
                    ? ayah.textUthmani // Tampilkan ayat pertama "Bismillah" untuk "Al-Faatiha"
                    : ayah.numberInSurah === 1
                    ? ayah.textUthmani
                        ?.replace(/بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ/, "")
                        .trim() // Hapus "Bismillah" jika bukan "Al-Faatiha"
                    : ayah.textUthmani;
                return (
                  <div
                    key={ayah.number}
                    className="py-4 odd:bg-slate-100/60 even:bg-white px-3 md:px-20"
                  >
                    {isNewSurah && (
                      <>
                        <div className="text-center py-4">
                          <h2 className="text-lg md:text-2xl font-bold mb-3">
                            {ayah.surah.englishName} (
                            {ayah.surah.englishNameTranslation})
                          </h2>
                        </div>
                        {ayah.surah.englishName !== "Al-Faatiha" &&
                        ayah.surah.englishName !== "At-Tawba" ? (
                          <h1 className="text-xl md:text-2xl text-center font-semibold mb-5">
                            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                          </h1>
                        ) : null}
                      </>
                    )}
                    <div>
                      <div className="flex justify-between">
                        <h2 className="font-semibold text-slate-500 text-lg md:text-xl lg:text-2xl text-start my-2 mr-2">
                          {ayah.numberInSurah}.
                        </h2>
                        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-end my-2">
                          {ayahText}
                        </h2>
                      </div>
                      <p className="text-xs md:text-sm lg:text-base text-left my-2">
                        {ayah.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
