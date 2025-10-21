// frontend/lib/api.ts
// Simulasi fetch ke backend dummy JSON

import { produk } from "../types";

// Fetch data produk dari backend dummy
export async function get_produk(): Promise < produk[] > {
  try {
    const res = await fetch("http://localhost:3000/produk");
    if (!res.ok) {
      throw new Error("gagal mengambil data produk");
    }
    const data: produk[] = await res.json();
    return data;
  } catch (error) {
    console.error("fetch produk gagal:", error);
    return [];
  }
}