// backend/utils/dataloader.ts
// Loader untuk membaca file JSON sebagai database dummy

import fs from "fs";
import path from "path";

// Fungsi umum untuk baca file json
export function load_json(file: string) {
  const file_path = path.join(__dirname, "..", "data", file);
  const json_data = fs.readFileSync(file_path, "utf-8");
  return JSON.parse(json_data);
}