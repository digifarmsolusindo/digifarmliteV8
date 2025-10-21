// frontend/components/paymenttimer.tsx
// Komponen timer 30 menit untuk batas waktu pembayaran

"use client";

import { useEffect, useState } from "react";

export default function paymenttimer() {
  const [sisa, set_sisa] = useState(1800); // 30 menit = 1800 detik
  
  useEffect(() => {
    const interval = setInterval(() => {
      set_sisa((waktu) => Math.max(waktu - 1, 0));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const menit = Math.floor(sisa / 60);
  const detik = sisa % 60;
  
  return (
    <div className="text-sm text-red-600 mb-4 font-semibold">
      sisa waktu pembayaran: {menit}:{detik.toString().padStart(2, "0")}
    </div>
  );
}