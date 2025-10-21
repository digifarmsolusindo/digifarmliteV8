// frontend/components/cardkategori.tsx
// Komponen kartu untuk kategori utama (peternak junior, muda, dll)

import React from "react";

type props = {
  id: string;
  label: string;
  icon: string; // path ke icon kategori
  on_click: () => void;
};

export default function cardkategori({ id, label, icon, on_click }: props) {
  return (
    <div
      onClick={on_click}
      className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-white border border-gray-200 active:scale-95 transition-transform"
    >
      <img
        src={icon}
        alt={label}
        className="w-12 h-12 mb-2 object-contain"
      />
      <p className="text-center text-sm font-semibold text-gray-800">{label}</p>
    </div>
  );
}