// frontend/app/akun/page.tsx
// Halaman akun: menampilkan info user, portofolio aktif, dan menu lain

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function halaman_akun() {
  const router = useRouter();
  const [saldo, set_saldo] = useState(0); // dummy, bisa dikembangkan
  
  return (
    <main className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-gray-800">akun saya</h1>
        <button
          className="text-blue-600 text-sm"
          onClick={() => router.push("/")}
        >
          beranda
        </button>
      </div>

      {/* Foto Profil */}
      <div className="flex flex-col items-center mb-4">
        <img
          src="/icons/user.png"
          alt="profil"
          className="w-20 h-20 rounded-full mb-2 border"
        />
        <p className="text-base font-semibold text-gray-700">nama pengguna</p>
      </div>

      {/* Portofolio */}
      <div className="mb-6">
        <h2 className="text-sm font-bold mb-2 text-gray-800">portofolio</h2>
        {saldo === 0 ? (
          <div className="text-center text-sm text-gray-500">
            belum ada investasi aktif.
            <button
              onClick={() => router.push("/")}
              className="mt-2 text-blue-600 underline"
            >
              ternak sekarang
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-1">saldo return:</p>
            <p className="text-xl font-bold text-green-700 mb-3">
              Rp {saldo.toLocaleString("id-ID")}
            </p>
            <button
              disabled={saldo === 0}
              className="w-full py-3 rounded-xl bg-green-600 text-white font-semibold active:scale-95 transition disabled:bg-gray-300"
            >
              tarik saldo
            </button>
          </>
        )}
      </div>

      {/* Menu Akun */}
      <div className="space-y-3">
        <button
          onClick={() => router.push("/pengaturan")}
          className="w-full text-left py-3 px-4 bg-gray-100 rounded-xl"
        >
          pengaturan akun
        </button>
        <button
          onClick={() => router.push("/bantuan")}
          className="w-full text-left py-3 px-4 bg-gray-100 rounded-xl"
        >
          bantuan & live chat
        </button>
      </div>
    </main>
  );
}