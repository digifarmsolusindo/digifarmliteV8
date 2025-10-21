// frontend/app/pembayaran/[id]/page.tsx
// Halaman mockup konfirmasi pembayaran manual (BCA)

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { get_produk } from "../../../lib/api";
import { produk } from "../../../types";
import PaymentTimer from "../../../components/paymenttimer";

export default function halaman_pembayaran() {
  const { id } = useParams();
  const [item, set_item] = useState < produk | null > (null);
  const [konfirmasi, set_konfirmasi] = useState(false);
  
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
    <main className="min-h-screen bg-white p-4">
      <h1 className="text-lg font-bold mb-4 text-gray-800">pembayaran manual</h1>

      {/* Timer */}
      <PaymentTimer />

      {/* Logo Bank */}
      <div className="mt-4 mb-2">
        <img
          src="/icons/bca.png"
          alt="bca"
          className="w-24 h-auto mb-2"
        />
      </div>

      <p className="text-sm text-gray-500">nominal transfer:</p>
      <p className="text-xl font-bold mb-4 text-gray-800">
        Rp {item.pokok_investasi.toLocaleString("id-ID")}
      </p>

      <p className="text-sm text-gray-500 mb-1">transfer ke rekening:</p>
      <p className="text-base font-bold text-gray-800">8692317822</p>
      <p className="text-sm text-gray-600 mb-4">a/n pt lazia cahya indonesia</p>

      {konfirmasi ? (
        <p className="text-green-600 text-sm font-semibold mt-6">
          status transaksi: menunggu konfirmasi admin...
        </p>
      ) : (
        <button
          onClick={() => set_konfirmasi(true)}
          className="bg-blue-600 text-white w-full py-3 rounded-xl font-semibold active:scale-95 transition"
        >
          konfirmasi pembayaran
        </button>
      )}
    </main>
  );
}