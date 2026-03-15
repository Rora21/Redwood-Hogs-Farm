# Redwood Hogs Farm

A Next.js 14 website with a full CMS admin panel for Redwood Hogs Farm — premium pig farming and quality livestock in Rwanda.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| CMS Admin | Next.js `/admin` routes, JWT auth via HttpOnly cookies |
| Backend API | Node.js, Express, TypeScript |
| Database | PostgreSQL |
| Image Uploads | multer → `public/images/uploads/` |

---

## Project Structure

```
├── app/                  # Next.js pages (App Router)
│   ├── admin/            # CMS admin UI (protected)
│   │   ├── login/        # Login page
│   │   ├── dashboard/    # Stats overview
│   │   ├── pigs/         # Pig listings CRUD
│   │   ├── services/     # Services CRUD
│   │   ├── gallery/      # Photo gallery CRUD
│   │   ├── farm-info/    # Farm contact & hours
│   │   └── about/        # About page content
│   ├── about/
│   ├── pigs/
│   ├── services/
│   ├── gallery/
│   └── contact/
├── components/
│   ├── admin/            # AdminSidebar, AdminHeader, Toast, etc.
│   └── ...               # Navbar, Footer, Hero, etc.
├── lib/
│   └── admin/            # API client, types, auth helpers
├── middleware.ts          # Next.js Edge middleware (JWT route guard)
├── public/
│   └── images/uploads/   # Uploaded images (served as static assets)
└── backend/              # Express API server
    └── src/
        ├── routes/       # auth, pigs, services, gallery, farm-info, about
        ├── middleware/   # auth, upload, errorHandler
        └── db/           # schema.sql, seed.ts, run-schema.ts
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 14+

### 1. Frontend (Next.js)

```bash
npm install
```

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
JWT_SECRET=your-secret-here          # must match backend JWT_SECRET
COOKIE_NAME=admin_token
```

```bash
npm run dev
# → http://localhost:3000
```

### 2. Backend (Express API)

```bash
cd backend
npm install
```

Copy and fill in the environment file:

```bash
cp .env.example .env
```

```env
PORT=3001
DATABASE_URL=postgresql://postgres:password@localhost:5432/redwood_hogs_cms
JWT_SECRET=your-secret-here          # must match frontend JWT_SECRET
COOKIE_NAME=admin_token
NEXT_ORIGIN=http://localhost:3000
UPLOADS_DIR=../public/images/uploads
```

> **Important:** `JWT_SECRET` must be the same value in both `.env.local` and `backend/.env`.

### 3. Database Setup

Create the database in PostgreSQL, then run:

```bash
cd backend
npm run db:schema   # creates all tables and seeds farm_info / about_content
npm run db:seed     # creates the default admin account
```

Start the API server:

```bash
npm run dev
# → http://localhost:3001
```

---

## Admin CMS

Navigate to [http://localhost:3000/admin](http://localhost:3000/admin).

### Default Login Credentials

| Field | Value |
|---|---|
| Email | `admin@redwoodhogsfarm.com` |
| Password | `changeme123` |

> **Change this password immediately in a production environment.**

### Admin Sections

| Route | Description |
|---|---|
| `/admin/dashboard` | Overview with content counts |
| `/admin/pigs` | Add / edit / delete pig listings |
| `/admin/services` | Add / edit / delete farm services |
| `/admin/gallery` | Upload and manage gallery photos |
| `/admin/farm-info` | Edit contact details and business hours |
| `/admin/about` | Edit the About page story, mission, and vision |

---

## Public Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, pigs, services, gallery preview |
| `/about` | Farm story, mission, and vision |
| `/pigs` | Full pig listings |
| `/services` | Services offered |
| `/gallery` | Full photo gallery |
| `/contact` | Contact form and details |
