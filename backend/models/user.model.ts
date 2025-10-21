// backend/models/user.model.ts
// Model akses user (admin dan user biasa)

import { load_json } from "../utils/dataloader";

export function get_user_by_email(email: string) {
  const semua = load_json("users.json");
  return semua.find((u: any) => u.email === email);
}