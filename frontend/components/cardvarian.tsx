// frontend/components/cardvarian.tsx
// Komponen varian ternak digital swipe horizontal + snap

"use client";

import { produk } from "../types";
import React from "react";

type props = {
  data: produk[];
  on_click: (item: produk) => void;
};

export default function cardvarian({ data, on_click }: props) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-4 snap-x snap-mandatory px-1">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => on_click(item)}
            className="min-w-[260px] max-w-[260px] shrink-0 snap-center bg-white border rounded-xl shadow p-4 cursor-pointer transition-transform hover:scale-95"
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-1">
              {item.durasi}
            </h2>

            <p className="text-xs text-gray-500 mb-1">Pokok Investasi:</p>
            <p className="text-base font-bold text-gray-800 mb-2">
              Rp {item.pokok_investasi.toLocaleString("id-ID")}
            </p>

            <p className="text-xs text-gray-500 mb-1">Return:</p>
            {item.promo && item.return_lama && (
              <p className="text-sm line-through text-red-500">
                Rp {item.return_lama.toLocaleString("id-ID")}
              </p>
            )}
            <p className="text-base font-bold text-green-700 mb-2">
              Rp {item.return_baru.toLocaleString("id-ID")}
            </p>

            <p className="text-xs text-gray-500 mb-1">Setara Dengan:</p>
            <p className="text-sm text-gray-600 mb-2">{item.setara}</p>

            {item.promo && (
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full w-fit">
                promo khusus transaksi pertama
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}