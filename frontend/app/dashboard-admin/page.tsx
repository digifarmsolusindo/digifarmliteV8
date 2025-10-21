// frontend/app/dashboard-admin/page.tsx
// Dashboard admin untuk validasi transaksi dan melihat laporan

"use client";

import { useState } from "react";
import AdminStatCard from "../../components/adminstatcard";

export default function dashboard_admin() {
  const [total_investasi, set_total_investasi] = useState(0); // dummy
  const [total_pendapatan, set_total_pendapatan] = useState(0); // dummy
  const [transaksi_menunggu, set_transaksi_menunggu] = useState(3); // dummy
  
  return (
    <main className="min-h-screen bg-white p-4">
      <h1 className="text-xl font-bold text-gray-800 mb-4">dashboard admin</h1>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 gap-4 mb-6">
        <AdminStatCard
          label="total investasi aktif"
          value={`Rp ${total_investasi.toLocaleString("id-ID")}`}
        />
        <AdminStatCard
          label="total pendapatan"
          value={`Rp ${total_pendapatan.toLocaleString("id-ID")}`}
        />
        <AdminStatCard
          label="transaksi menunggu"
          value={`${transaksi_menunggu} transaksi`}
        />
      </div>

      {/* Dummy Daftar Transaksi */}
      <div>
        <h2 className="text-sm font-bold mb-2 text-gray-800">validasi transaksi</h2>
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="bg-gray-100 p-3 rounded-xl mb-3 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-gray-700">
                user{id}@mail.com
              </p>
              <p className="text-xs text-gray-500">paket junior-90</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs active:scale-95">
              konfirmasi
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}