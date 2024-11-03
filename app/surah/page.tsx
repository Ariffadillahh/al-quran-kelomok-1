"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [surah, setSurah] = useState<any[]>([]);
  const [filtr, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const apiUrl = "https://api.alquran.cloud/v1/surah";

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSurah(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center text-xl ">Loading...</div>
      ) : (
        <div className="px-3 md:px-10 pt-[70px]">
          <div className="w-full mx-auto my-5">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Surah..."
                autoComplete="off"
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2  gap-3 text-center mb-5">
            {surah
              .filter((datas) => {
                if (filtr === "") {
                  return true;
                }
                return datas.englishName
                  .toLowerCase()
                  .includes(filtr.toLowerCase());
              })
              .map((datas) => (
                <Link
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  key={datas.number}
                  href={`surah/${datas.number}`}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {datas.name.replace("سُورَةُ", "").trim()}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {datas.englishName}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
