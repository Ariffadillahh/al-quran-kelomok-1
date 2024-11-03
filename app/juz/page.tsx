import React from "react";
import { juzData } from "../data";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-3 md:px-10 pt-[70px]">
      <div className="my-8">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2  gap-3 text-center ">
          {juzData.map((datas) => {
            return (
              <Link
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                key={datas.juzNumber}
                href={`juz/${datas.juzNumber}`}
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Juz {datas.juzNumber}
                </h5>
                <p className="font-xs text-gray-700 dark:text-gray-400">
                  Mulai di {datas.startSurah} Ayat {datas.startAyah}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
