// frontend/app/register/page.tsx
// Halaman pendaftaran user (dummy, belum simpan data)

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function halaman_register() {
  const router = useRouter();
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [pesan, set_pesan] = useState("");
  
  async function handle_register(e: React.FormEvent) {
    e.preventDefault();
    set_pesan("");
    
    // Simulasi verifikasi email (dummy saja)
    set_pesan("verifikasi email dikirim ke " + email);
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }
  
  return (
    <main className="min-h-screen bg-white p-6 flex flex-col justify-center">
      <h1 className="text-xl font-bold mb-6 text-gray-800 text-center">
        daftar akun baru
      </h1>

      <form onSubmit={handle_register} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => set_email(e.target.value)}
          placeholder="email"
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => set_password(e.target.value)}
          placeholder="password"
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        {pesan && (
          <p className="text-green-600 text-sm">{pesan}</p>
        )}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-md font-semibold"
        >
          daftar
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
        sudah punya akun?{" "}
        <button
          className="text-blue-600"
          onClick={() => router.push("/login")}
        >
          masuk
        </button>
      </p>
    </main>
  );
}