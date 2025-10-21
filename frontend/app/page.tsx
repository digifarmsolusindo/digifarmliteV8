// frontend/app/page.tsx
// Halaman utama: menampilkan kategori ternak (grid 2x2), logo, tombol akun

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { get_produk } from "../lib/api";
import { produk } from "../types";
import CardKategori from "../components/cardkategori";

const kategori_list = [
  {
    id: "peternak junior",
    label: "peternak junior",
    icon: "/icons/junior.png" // icon dummy (bisa ganti nanti)
  },
  {
    id: "peternak muda",
    label: "peternak muda",
    icon: "/icons/muda.png"
  },
  {
    id: "peternak senior",
    label: "peternak senior",
    icon: "/icons/senior.png"
  },
  {
    id: "juragan ternak",
    label: "juragan ternak",
    icon: "/icons/juragan.png"
  }
];

export default function halaman_utama() {
  const router = useRouter();
  const [tekan, set_tekan] = useState(0);

  // Navigasi ke admin jika teks ditekan 5x cepat
  useEffect(() => {
    if (tekan >= 5) {
      router.push("/dashboard-admin");
    }
  }, [tekan, router]);

  return (
    <main className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1
          className="text-xl font-bold text-gray-800"
          onClick={() => set_tekan(tekan + 1)}
        >
          digifarm.lite
        </h1>
        <button
          className="text-sm text-blue-600"
          onClick={() => router.push("/akun")}
        >
          akun
        </button>
      </div>

      {/* Grid Kategori */}
      <div className="grid grid-cols-2 gap-4">
        {kategori_list.map((item) => (
          <CardKategori
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
            on_click={() => router.push(`/kategori/${item.id}`)}
          />
        ))}
      </div>
    </main>
  );
}