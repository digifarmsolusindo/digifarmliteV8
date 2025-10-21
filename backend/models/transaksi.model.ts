// backend/models/transaksi.model.ts
// Model akses data transaksi ternak

import { load_json } from "../utils/dataloader";

export function get_semua_transaksi() {
  return load_json("transaksi.json");
}

export function get_transaksi_by_user(user_id: string) {
  const semua = get_semua_transaksi();
  return semua.filter((t: any) => t.user_id === user_id);
}

export function get_transaksi_menunggu() {
  const semua = get_semua_transaksi();
  return semua.filter((t: any) => t.status === "menunggu konfirmasi");
}