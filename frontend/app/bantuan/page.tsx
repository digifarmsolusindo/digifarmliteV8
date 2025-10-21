// frontend/app/bantuan/page.tsx
// Halaman bantuan: berisi FAQ, kebijakan pengguna, dan tombol live chat

"use client";

import { useRouter } from "next/navigation";

export default function halaman_bantuan() {
  const router = useRouter();
  
  return (
    <main className="min-h-screen bg-white p-4">
      <h1 className="text-lg font-bold text-gray-800 mb-4">bantuan pengguna</h1>

      {/* FAQ */}
      <section className="mb-6">
        <h2 className="text-sm font-bold mb-2 text-gray-700">faq</h2>
        <ul className="list-disc text-sm text-gray-600 pl-5 space-y-2">
          <li>bagaimana cara melakukan investasi ternak?</li>
          <li>berapa lama return akan masuk ke akun saya?</li>
          <li>apakah ada asuransi jika ternak mati?</li>
          <li>bagaimana saya menarik saldo return?</li>
        </ul>
      </section>

      {/* Kebijakan */}
      <section className="mb-6">
        <h2 className="text-sm font-bold mb-2 text-gray-700">
          kebijakan pengguna
        </h2>
        <p className="text-sm text-gray-600">
          semua pengguna wajib memastikan bahwa data transaksi dan bukti
          transfer valid. digifarm.lite tidak bertanggung jawab atas kesalahan
          input atau keterlambatan transfer di luar sistem. semua transaksi
          tunduk pada kebijakan manual verifikasi.
        </p>
      </section>

      {/* Live Chat */}
      <section className="mt-8">
        <button
          onClick={() => router.push("/livechat")} // sementara nonaktif
          className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold active:scale-95 transition"
        >
          hubungi live chat agent
        </button>
      </section>
    </main>
  );
}