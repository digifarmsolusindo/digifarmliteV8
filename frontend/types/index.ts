// frontend/types/index.ts
// Definisi tipe data untuk produk, user, transaksi, dll

export type produk = {
  id: string; // contoh: "junior-30"
  kategori: string; // contoh: "peternak junior"
  durasi: string; // contoh: "30 hari"
  pokok_investasi: number; // nilai pokok (tanpa titik)
  return_baru: number; // nilai return promo (jika ada)
  return_lama ? : number; // nilai return lama (jika ada promo)
  promo: boolean; // true jika ada promo return
  setara: string; // deskripsi setara, misal: "2 ekor ayam..."
  catatan: string; // catatan tambahan
};