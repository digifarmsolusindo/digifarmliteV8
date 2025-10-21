// backend/controllers/transaksi.controller.ts
// Transaksi user: ambil semua, filter user, filter status

import { Request, Response } from "express";
import {
  get_semua_transaksi,
  get_transaksi_by_user,
  get_transaksi_menunggu
} from "../models/transaksi.model";

export function ambil_semua_transaksi(req: Request, res: Response) {
  const data = get_semua_transaksi();
  res.json(data);
}

export function ambil_transaksi_by_user(req: Request, res: Response) {
  const { user_id } = req.params;
  const data = get_transaksi_by_user(user_id);
  res.json(data);
}

export function ambil_transaksi_menunggu(req: Request, res: Response) {
  const data = get_transaksi_menunggu();
  res.json(data);
}