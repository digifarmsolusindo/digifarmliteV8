// backend/server.ts
// Entrypoint server express dummy API

import express from "express";
import cors from "cors";

// Import semua route
import produk_routes from "./routes/produk.routes";
import user_routes from "./routes/user.routes";
import auth_routes from "./routes/auth.routes";
import transaksi_routes from "./routes/transaksi.routes";

const app = express();
const port = 3000;

// Middleware dasar
app.use(cors());
app.use(express.json());

// Route endpoint
app.use("/produk", produk_routes);
app.use("/user", user_routes);
app.use("/auth", auth_routes);
app.use("/transaksi", transaksi_routes);

// Default route
app.get("/", (req, res) => {
  res.send("api digifarm-lite berjalan");
});

// Start
app.listen(port, () => {
  console.log(`server dummy digifarm-lite jalan di http://localhost:${port}`);
});