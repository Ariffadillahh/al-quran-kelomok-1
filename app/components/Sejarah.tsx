import React from "react";
import { Timeline } from "../components/ui/timeline";

export function Sejarah() {
  const data = [
    {
      title: "Periode Turunnya Al-Quran",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            - Periode Mekkah (610–622 M): Fokus pada keimanan, tauhid, dan
            akhlak.<br></br>
            - Periode Madinah (622–632 M): Fokus pada hukum, sosial, dan
            pembentukan masyarakat.
          </p>
        </div>
      ),
    },
    {
      title: "Penghafalan dan Pencatatan pada Masa Nabi",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Al-Quran dihafalkan oleh sahabat dan dicatat pada media seperti
            kulit, tulang, dan pelepah kurma untuk menjaga keasliannya.
          </p>
        </div>
      ),
    },
    {
      title: "Pengumpulan Al-Quran pada Masa Khalifah Abu Bakar",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Pada tahun 632 M, Khalifah Abu Bakar mengumpulkan Al-Quran dalam
            satu mushaf untuk menjaga keaslian setelah wafatnya banyak
            penghafal.
          </p>
        </div>
      ),
    },
    {
      title: "Standarisasi pada Masa Khalifah Utsman",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Sekitar tahun 650 M, Khalifah Utsman menstandarkan Al-Quran dalam
            dialek Quraisy untuk mencegah perbedaan bacaan. Standar ini dikenal
            sebagai Mushaf Utsmani.
          </p>
        </div>
      ),
    },
    {
      title: "Struktur Al-Quran",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Al-Quran terdiri dari 114 surah dan 6,236 ayat yang dianggap suci
            dan otentik tanpa perubahan sejak diturunkan.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
