// frontend/app/detail/[id]/page.tsx
// Halaman detail produk: menampilkan informasi varian yang dipilih

"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { get_produk } from "../../../lib/api";
import { produk } from "../../../types";

export default function halaman_detail() {
  const { id } = useParams();
  const router = useRouter();
  
  const [item, set_item] = useState < produk | null > (null);
  
  useEffect(() => {
    async function ambil() {
      const semua = await get_produk();
      const data = semua.find((p) => p.id === id);
      set_item(data || null);
    }
    ambil();
  }, [id]);
  
  if (!item) {
    return <p className="p-4 text-sm text-gray-500">produk tidak ditemukan</p>;
  }
  
  return (
    <main className="min-h-screen p-4 bg-white">
      <h1 className="text-lg font-bold text-gray-800 mb-2">
        paket {item.kategori} - {item.durasi}
      </h1>

      <p className="text-sm text-gray-500 mb-1">Pokok Investasi:</p>
      <p className="text-base font-bold mb-2">
        Rp {item.pokok_investasi.toLocaleString("id-ID")}
      </p>

      <p className="text-sm text-gray-500 mb-1">Return:</p>
      {item.promo && item.return_lama && (
        <p className="text-sm line-through text-red-500">
          Rp {item.return_lama.toLocaleString("id-ID")}
        </p>
      )}
      <p className="text-base font-bold text-green-700 mb-2">
        Rp {item.return_baru.toLocaleString("id-ID")}
      </p>

      {item.promo && (
        <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full w-fit mb-3">
          promo khusus pengguna baru
        </div>
      )}

      <p className="text-sm text-gray-500 mb-1">Setara Dengan:</p>
      <p className="text-sm text-gray-600 mb-4">{item.setara}</p>

      <p className="text-xs text-gray-400 mb-6">{item.catatan}</p>

      <button
        onClick={() => router.push(`/pembayaran/${item.id}`)}
        className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold active:scale-95 transition"
      >
        bayar sekarang
      </button>
    </main>
  );
}