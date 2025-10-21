// backend/models/produk.model.ts
// Model akses data produk ternak digital

import { load_json } from "../utils/dataloader";

export function get_semua_produk() {
  return load_json("produk.json");
}

export function get_produk_by_id(id: string) {
  const semua = get_semua_produk();
  return semua.find((p: any) => p.id === id);
}

export function get_produk_by_kategori(kategori: string) {
  const semua = get_semua_produk();
  return semua.filter((p: any) => p.kategori === kategori);
}