// backend/controllers/auth.controller.ts
// Simulasi login (tanpa hash, hanya dummy)

import { Request, Response } from "express";
import { get_user_by_email } from "../models/user.model";

export function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = get_user_by_email(email);
  
  if (user && user.password === password) {
    res.json({
      status: "berhasil",
      email: user.email,
      nama: user.nama,
      role: user.role
    });
  } else {
    res.status(401).json({ error: "login gagal, email atau password salah" });
  }
}