// frontend/app/login/page.tsx
// Halaman login user & admin

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function halaman_login() {
  const router = useRouter();
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [pesan, set_pesan] = useState("");
  
  async function handle_login(e: React.FormEvent) {
    e.preventDefault();
    set_pesan("");
    
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      
      if (!res.ok) throw new Error("login gagal");
      
      const data = await res.json();
      if (data.role === "admin") {
        router.push("/dashboard-admin");
      } else {
        router.push("/");
      }
    } catch (err) {
      set_pesan("email atau password salah");
    }
  }
  
  return (
    <main className="min-h-screen bg-white p-6 flex flex-col justify-center">
      <h1 className="text-xl font-bold mb-6 text-gray-800 text-center">
        login ke digifarm.lite
      </h1>

      <form onSubmit={handle_login} className="space-y-4">
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
          <p className="text-red-600 text-sm">{pesan}</p>
        )}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold"
        >
          masuk
        </button>
      </form>

      <div className="flex justify-between mt-4 text-sm">
        <button className="text-blue-600" onClick={() => alert("fitur lupa password belum aktif")}>
          lupa password?
        </button>
        <button className="text-gray-600" onClick={() => router.push("/register")}>
          daftar akun
        </button>
      </div>
    </main>
  );
}