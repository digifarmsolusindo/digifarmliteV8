// frontend/app/kategori/[kategori]/page.tsx
// Halaman varian berdasarkan kategori

"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { get_produk } from "../../../lib/api";
import { produk } from "../../../types";
import CardVarian from "../../../components/cardvarian";

export default function halaman_kategori() {
  const { kategori } = useParams();
  const router = useRouter();
  
  const [data, set_data] = useState < produk[] > ([]);
  
  useEffect(() => {
    async function ambil() {
      const semua = await get_produk();
      const hasil = semua.filter((item) => item.kategori === kategori);
      set_data(hasil);
    }
    ambil();
  }, [kategori]);
  
  return (
    <main className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-lg font-bold text-gray-800 capitalize">
          {kategori}
        </h1>
        <p className="text-sm text-gray-500">
          pilih varian ternak digital
        </p>
      </div>

      {/* Komponen Varian */}
      {data.length > 0 ? (
        <CardVarian
          data={data}
          on_click={(item) => router.push(`/detail/${item.id}`)}
        />
      ) : (
        <p className="text-sm text-gray-500">tidak ada varian ditemukan.</p>
      )}
    </main>
  );
}