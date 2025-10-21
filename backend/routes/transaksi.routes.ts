// backend/routes/transaksi.routes.ts
import express from "express";
import {
  ambil_semua_transaksi,
  ambil_transaksi_by_user,
  ambil_transaksi_menunggu
} from "../controllers/transaksi.controller";

const router = express.Router();

router.get("/", ambil_semua_transaksi);
router.get("/user/:user_id", ambil_transaksi_by_user);
router.get("/menunggu", ambil_transaksi_menunggu);

export default router;