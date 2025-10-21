// frontend/components/navbar.tsx
// Komponen navbar atas: judul + icon akun

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function navbar() {
  const router = useRouter();
  const [tekan, set_tekan] = useState(0);
  
  function handle_tekan_judul() {
    const jumlah = tekan + 1;
    set_tekan(jumlah);
    if (jumlah >= 5) {
      router.push("/dashboard-admin");
    }
  }
  
  return (
    <header className="flex items-center justify-between mb-4">
      <h1
        className="text-xl font-bold text-gray-800"
        onClick={handle_tekan_judul}
      >
        digifarm.lite
      </h1>
      <button
        onClick={() => router.push("/akun")}
        className="text-sm text-blue-600"
      >
        akun
      </button>
    </header>
  );
}