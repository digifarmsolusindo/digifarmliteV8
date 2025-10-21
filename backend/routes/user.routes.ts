// backend/routes/user.routes.ts
import express from "express";
import { cek_user_by_email } from "../controllers/user.controller";

const router = express.Router();

router.get("/:email", cek_user_by_email);

export default router;