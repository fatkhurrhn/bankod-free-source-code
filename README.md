
<div align="center">

# Bankod

**Free Source Code Catalog**

A curated catalog of free source code for developers, students, and anyone looking to explore, learn, and build projects.

<br />

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Cloudflare R2](https://img.shields.io/badge/Cloudflare-R2-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/r2/)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success.svg)]()

</div>

---

## Overview

**Bankod** is a free source code catalog designed to help developers discover, explore, and access source code for learning and project development.

Built with Astro, Firebase, and Cloudflare R2, Bankod provides a lightweight catalog experience alongside an administrative dashboard for managing source code collections.

## Features

- **Source Code Catalog** — Browse and explore a collection of free source code.
- **Admin Dashboard** — Manage catalog entries through an administrative interface.
- **Authentication** — Secure admin login powered by Firebase Authentication.
- **Cloud Storage** — Store and serve thumbnail images using Cloudflare R2.
- **Responsive Interface** — Clean and accessible design across different screen sizes.
- **Lightweight Architecture** — Fast page rendering powered by Astro.

## Tech Stack

| Technology | Purpose |
|:--|:--|
| [Astro](https://astro.build/) | Web framework |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Firebase Firestore](https://firebase.google.com/products/firestore) | Database |
| [Firebase Authentication](https://firebase.google.com/products/auth) | Admin authentication |
| [Cloudflare R2](https://developers.cloudflare.com/r2/) | Object storage |

## Project Structure

```text
Bankod/
├── src/
│   ├── lib/
│   │   ├── firebase.ts    # Firebase initialization
│   │   ├── source.ts      # Firestore CRUD operations
│   │   ├── r2.ts          # Cloudflare R2 integration
│   │   └── guard.ts       # Admin route protection
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro    # Public catalog
│   │   ├── api/
│   │   │   └── upload.ts  # R2 upload endpoint
│   │   └── admin/
│   │       ├── login.astro
│   │       ├── index.astro
│   │       └── form.astro
│   │
│   └── styles/
│       └── global.css
│
├── firestore.rules
├── .env.example
└── package.json
```

## Getting Started

### Prerequisites

Make sure you have the following installed or configured:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- [Firebase Account](https://console.firebase.google.com/)
- [Cloudflare Account](https://dash.cloudflare.com/)

### 1. Clone the Repository

```bash
git clone <repo-url>
cd Bankod
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

1. Create a new project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Cloud Firestore**.
3. Open **Authentication** and enable the **Email/Password** sign-in provider.
4. Add an admin account under Authentication → Users.
5. Navigate to Project Settings → Your Apps → Web App.
6. Copy your Firebase configuration for the environment variables.

### 4. Configure Cloudflare R2

1. Create a new R2 bucket in the Cloudflare Dashboard.
2. Generate an API Token with **Object Read & Write** permissions restricted to the selected bucket.
3. Connect a custom domain or enable the public development URL.
4. Configure the bucket's CORS policy:

```json
[
  {
    "AllowedOrigins": [
      "http://localhost:4321",
      "https://your-domain.com"
    ],
    "AllowedMethods": [
      "GET",
      "PUT",
      "HEAD"
    ],
    "AllowedHeaders": [
      "Content-Type"
    ],
    "ExposeHeaders": [
      "ETag"
    ],
    "MaxAgeSeconds": 3600
  }
]
```

Replace `https://your-domain.com` with your actual website domain.

### 5. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Update the `.env` file with your Firebase and Cloudflare R2 credentials.

### 6. Configure Firestore Security Rules

1. Open Firebase Console.
2. Navigate to Firestore Database → Rules.
3. Copy the contents of `firestore.rules`.
4. Paste them into the Firebase Security Rules editor.
5. Click **Publish**.

### 7. Start the Development Server

```bash
npm run dev
```

Once the server is running, access the application:

| Page | Local URL |
|:--|:--|
| Public Catalog | http://localhost:4321 |
| Admin Dashboard | http://localhost:4321/admin |

Sign in using your configured admin credentials to access the dashboard.

## License

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this project in accordance with the license terms.

---

<div align="center">

**Bankod**

A simple way to discover and explore source code.

</div>
