// backend/controllers/user.controller.ts
// Controller data user (akun, portofolio, dll)

import { Request, Response } from "express";
import { get_user_by_email } from "../models/user.model";

export function cek_user_by_email(req: Request, res: Response) {
  const { email } = req.params;
  const user = get_user_by_email(email);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "user tidak ditemukan" });
  }
}