# DIGIFARM.Lite 🐔

Sebuah prototipe investasi ternak digital berbasis React (Next.js 14 App Router) + backend Express dummy API.

✅ 100% TypeScript  
✅ Bisa dijalankan offline di Acode / SPCK  
✅ Tidak membutuhkan database atau koneksi server  

---

## 📁 Struktur Folder Lengkap

```
digifarm-lite/
├── backend/
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── produk.controller.ts
│   │   ├── transaksi.controller.ts
│   │   └── user.controller.ts
│   ├── data/
│   │   ├── produk.json
│   │   ├── transaksi.json
│   │   └── users.json
│   ├── models/
│   │   ├── produk.model.ts
│   │   ├── transaksi.model.ts
│   │   └── user.model.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── produk.routes.ts
│   │   ├── transaksi.routes.ts
│   │   └── user.routes.ts
│   ├── utils/
│   │   └── dataloader.ts
│   └── server.ts
│
├── frontend/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── dashboard-admin/
│   │   │   └── page.tsx
│   │   ├── kategori/
│   │   │   └── [kategori]/page.tsx
│   │   ├── detail/
│   │   │   └── [id]/page.tsx
│   │   ├── pembayaran/
│   │   │   └── [id]/page.tsx
│   │   ├── akun/
│   │   │   └── page.tsx
│   │   └── bantuan/
│   │       └── page.tsx
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── button.tsx
│   │   ├── cardkategori.tsx
│   │   ├── cardvarian.tsx
│   │   ├── paymenttimer.tsx
│   │   └── adminstatcard.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── index.ts
│
├── .gitignore
└── README.md
```

---

## ℹ️ Catatan

- **Frontend** dibangun dengan Next.js 14 App Router
- **Backend** dummy Express (tanpa koneksi database)
- Semua jalankan **lokal/offline** di SPCK / Acode tanpa `npm install`

