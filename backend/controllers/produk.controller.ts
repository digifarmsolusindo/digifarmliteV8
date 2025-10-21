// backend/controllers/produk.controller.ts
// Controller untuk produk ternak

import { Request, Response } from "express";
import {
  get_semua_produk,
  get_produk_by_id,
  get_produk_by_kategori
} from "../models/produk.model";

export function ambil_semua_produk(req: Request, res: Response) {
  const data = get_semua_produk();
  res.json(data);
}

export function ambil_produk_by_id(req: Request, res: Response) {
  const { id } = req.params;
  const data = get_produk_by_id(id);
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: "produk tidak ditemukan" });
  }
}

export function ambil_produk_by_kategori(req: Request, res: Response) {
  const { kategori } = req.params;
  const data = get_produk_by_kategori(kategori);
  res.json(data);
}