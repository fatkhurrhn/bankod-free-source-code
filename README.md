# Bankod

Katalog source code gratis. Dibangun dengan Astro, Firebase, dan Cloudflare R2.

## Stack

- **Astro** — framework
- **Tailwind CSS v4** — styling
- **Firebase Firestore** — database
- **Firebase Auth** — login admin
- **Cloudflare R2** — storage thumbnail

## Setup

### 1. Clone & install

```bash
git clone <repo-url>
cd Bankod
npm install
2. Firebase
Buat project di Firebase Console

Aktifkan Firestore Database (mode test dulu)

Aktifkan Authentication → Sign-in method → Email/Password

Di tab Users, tambah akun admin (email + password)

Di Project Settings → Add app → Web, copy config-nya

3. Cloudflare R2
Buat bucket R2

Buat API Token (Object Read & Write, khusus bucket itu)

Sambungkan custom domain atau pakai public dev URL

Set CORS Policy di bucket:

json
[
  {
    "AllowedOrigins": ["http://localhost:4321", "https://domain-kamu.com"],
    "AllowedMethods": ["GET", "PUT", "HEAD"],
    "AllowedHeaders": ["Content-Type"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
4. Environment
Copy .env.example jadi .env, isi semua value-nya.

5. Firestore Rules
Copy isi firestore.rules ke Firebase Console → Firestore → Rules, lalu Publish.

6. Jalanin
bash
npm run dev
Buka http://localhost:4321 untuk katalog, http://localhost:4321/admin untuk admin (login dulu).

Struktur
text
src/
├── lib/
│   ├── firebase.ts    # init Firebase
│   ├── source.ts      # CRUD Firestore
│   ├── r2.ts          # upload ke R2
│   └── guard.ts       # proteksi halaman admin
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro            # katalog publik
│   ├── api/
│   │   └── upload.ts          # endpoint upload R2
│   └── admin/
│       ├── login.astro        # login
│       ├── index.astro        # list data
│       └── form.astro         # tambah/edit
└── styles/
    └── global.css
Lisensi
MIT

