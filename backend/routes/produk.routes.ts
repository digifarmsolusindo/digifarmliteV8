// backend/routes/produk.routes.ts
import express from "express";
import {
  ambil_semua_produk,
  ambil_produk_by_id,
  ambil_produk_by_kategori
} from "../controllers/produk.controller";

const router = express.Router();

router.get("/", ambil_semua_produk);
router.get("/:id", ambil_produk_by_id);
router.get("/kategori/:kategori", ambil_produk_by_kategori);

export default router;