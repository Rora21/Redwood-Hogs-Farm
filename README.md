# Redwood Hogs Farm

A full-stack web application for Redwood Hogs Farm — premium pig farming and quality livestock in Rwanda. The project includes a public-facing marketing website and a password-protected CMS admin panel for managing all site content.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Admin CMS](#admin-cms)
- [API Reference](#api-reference)
- [Authentication](#authentication)
- [Image Uploads](#image-uploads)
- [Public Pages](#public-pages)
- [Scripts Reference](#scripts-reference)

---

## Overview

The application is split into two servers that run side by side:

| Server | Port | Description |
|---|---|---|
| **Next.js** | 3000 | Public website + admin CMS UI |
| **Express API** | 3001 | REST API, database access, image uploads |

The Next.js app handles all rendering and routing. The Express backend handles all data persistence, authentication, and file uploads. The two communicate via HTTP — the frontend calls the backend API using `credentials: 'include'` so the session cookie is passed on every request.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS with custom brand color tokens |
| Backend framework | Node.js, Express 4, TypeScript |
| Database | PostgreSQL 14+ |
| Authentication | JWT — signed by backend, verified by both Edge middleware and backend middleware |
| Session storage | HttpOnly cookie (`admin_token`) |
| Image uploads | multer (disk storage → `public/images/uploads/`) |
| JWT verification (Edge) | `jose` (Web Crypto API — Edge-compatible) |
| JWT signing (backend) | `jsonwebtoken` |
| Password hashing | `bcryptjs` |
| API documentation | Swagger UI (`swagger-jsdoc` + `swagger-ui-express`) |
| Security headers | `helmet` |

---

## Architecture

```
Browser
  │
  ├─── GET /admin/*  ──► Next.js middleware.ts (Edge)
  │                        └─ Verifies admin_token cookie (jose)
  │                        └─ Redirects to /admin/login if invalid
  │
  ├─── GET /  (public) ──► Next.js pages (SSR/SSG)
  │
  └─── fetch /api/*  ──► Express API (port 3001)
                           ├─ verifyToken middleware (jsonwebtoken)
                           ├─ Route handlers (CRUD)
                           └─ PostgreSQL (pg.Pool)
```

### Key design decisions

- **Two-layer JWT verification** — The Next.js Edge middleware provides fast page-level protection without hitting the database. The Express `verifyToken` middleware re-validates the same token on every API call, so the backend is never bypassed.
- **HttpOnly cookies** — The JWT is never accessible to JavaScript, which prevents XSS token theft.
- **Static image serving** — multer saves uploaded files directly into `public/images/uploads/`. Next.js serves this directory as static assets, so no separate file server or cloud storage is required in development.
- **Separate layout for admin** — `app/admin/layout.tsx` renders the sidebar + header shell. The public `Navbar` and `Footer` are suppressed on admin routes via `components/ConditionalShell.tsx`, which reads `usePathname()` and conditionally renders them.

---

## Project Structure

```
Redwood-Hogs-Farm/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — wraps all pages with ConditionalShell
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── pigs/page.tsx             # Pig listings
│   ├── services/page.tsx         # Services
│   ├── gallery/page.tsx          # Photo gallery
│   ├── contact/page.tsx          # Contact form
│   ├── not-found.tsx             # Custom 404 page
│   │
│   └── admin/                    # CMS admin (protected by middleware.ts)
│       ├── layout.tsx            # Admin shell — sidebar + header; skipped on /login
│       ├── page.tsx              # Redirects → /admin/pigs
│       ├── login/page.tsx        # Login form
│       ├── dashboard/page.tsx    # Stats overview
│       ├── pigs/
│       │   ├── page.tsx          # Pig listings table
│       │   ├── new/page.tsx      # Create pig form
│       │   └── [id]/edit/page.tsx# Edit pig form
│       ├── services/
│       │   ├── page.tsx
│       │   ├── new/page.tsx
│       │   └── [id]/edit/page.tsx
│       ├── gallery/
│       │   ├── page.tsx          # Image grid with delete
│       │   └── new/page.tsx      # Upload form (multipart)
│       ├── farm-info/page.tsx    # Edit contact details & hours
│       └── about/page.tsx        # Edit story, mission, vision
│
├── components/
│   ├── ConditionalShell.tsx      # Hides Navbar/Footer on /admin/* routes
│   ├── Navbar.tsx                # Public navigation (active link detection)
│   ├── Footer.tsx                # Public footer (3-column layout)
│   ├── Hero.tsx                  # Homepage hero section
│   ├── Gallery.tsx               # Public gallery grid
│   ├── PigCard.tsx               # Single pig card component
│   └── admin/
│       ├── AdminSidebar.tsx      # Left sidebar navigation
│       ├── AdminHeader.tsx       # Top bar with page title + logout
│       ├── Toast.tsx             # Slide-in success/error notification
│       ├── ConfirmDialog.tsx     # Delete confirmation modal
│       └── ImageUpload.tsx       # Drag-and-drop image upload with preview
│
├── lib/
│   └── admin/
│       ├── types.ts              # TypeScript interfaces for all data models
│       ├── api.ts                # apiFetch() wrapper + ApiError class
│       └── auth.ts               # logout() helper
│
├── middleware.ts                 # Next.js Edge middleware — JWT route guard
│
├── public/
│   └── images/
│       ├── *.jpg / *.png         # Static farm photos
│       └── uploads/              # multer upload destination (auto-served)
│
├── next.config.js
├── tailwind.config.js            # Brand color tokens
├── tsconfig.json                 # Path alias: @/* → root
├── .env.local                    # Frontend environment variables (not committed)
│
└── backend/                      # Express API server
    ├── src/
    │   ├── index.ts              # Express app entry point (port 3001)
    │   ├── config/
    │   │   ├── db.ts             # pg.Pool setup + query() helper
    │   │   └── swagger.ts        # OpenAPI spec (schemas + server config)
    │   ├── routes/
    │   │   ├── auth.ts           # POST /login, POST /logout, GET /me
    │   │   ├── pigs.ts           # Full CRUD /api/pigs
    │   │   ├── services.ts       # Full CRUD /api/services
    │   │   ├── gallery.ts        # Full CRUD /api/gallery + batch reorder
    │   │   ├── farmInfo.ts       # GET + PUT /api/farm-info
    │   │   ├── about.ts          # GET + PUT /api/about
    │   │   └── upload.ts         # POST /api/upload (general image upload)
    │   ├── middleware/
    │   │   ├── auth.ts           # verifyToken — reads cookie, attaches req.user
    │   │   ├── upload.ts         # multer config (10 MB, JPEG/PNG/WebP/GIF)
    │   │   └── errorHandler.ts   # Global Express error handler
    │   └── db/
    │       ├── schema.sql        # All table definitions + seed inserts
    │       ├── run-schema.ts     # Node.js script to apply schema (cross-platform)
    │       └── seed.ts           # bcrypt-hashes and inserts the default admin
    ├── .env                      # Backend environment variables (not committed)
    ├── .env.example              # Template — copy to .env and fill in values
    ├── package.json
    └── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL 14+ running locally
- A PostgreSQL database named `redwood_hogs_cms` (or any name you prefer)

---

### 1. Clone and install frontend dependencies

```bash
git clone <repo-url>
cd Redwood-Hogs-Farm
npm install
```

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
JWT_SECRET=replace-with-a-long-random-secret-at-least-32-chars
COOKIE_NAME=admin_token
```

---

### 2. Install backend dependencies

```bash
cd backend
npm install
```

Copy the environment template and fill in your values:

```bash
cp .env.example .env
```

Edit `backend/.env`:

```env
PORT=3001
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/redwood_hogs_cms
JWT_SECRET=replace-with-a-long-random-secret-at-least-32-chars
COOKIE_NAME=admin_token
NEXT_ORIGIN=http://localhost:3000
UPLOADS_DIR=../public/images/uploads
```

> **Important:** `JWT_SECRET` must be **identical** in both `.env.local` and `backend/.env`. The Next.js middleware and the Express backend each independently verify tokens using this secret.

---

### 3. Set up the database

Create the database in PostgreSQL first, then run:

```bash
cd backend
npm run db:schema   # Creates all tables and seeds farm_info + about_content defaults
npm run db:seed     # Creates the default admin account (see credentials below)
```

---

### 4. Start both servers

In one terminal (backend):

```bash
cd backend
npm run dev
# → Express API running at http://localhost:3001
# → Swagger docs at http://localhost:3001/api/docs
```

In another terminal (frontend):

```bash
npm run dev
# → Next.js running at http://localhost:3000
```

---

## Environment Variables

### Frontend — `.env.local`

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Full URL of the Express API | `http://localhost:3001` |
| `JWT_SECRET` | Secret for Edge middleware JWT verification | A 32+ char random string |
| `COOKIE_NAME` | Name of the session cookie | `admin_token` |

### Backend — `backend/.env`

| Variable | Description | Example |
|---|---|---|
| `PORT` | Port for the Express server | `3001` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:pass@localhost:5432/redwood_hogs_cms` |
| `JWT_SECRET` | Secret for signing and verifying JWTs | Must match frontend value |
| `COOKIE_NAME` | Name of the session cookie | `admin_token` |
| `NEXT_ORIGIN` | Allowed CORS origin (the Next.js app) | `http://localhost:3000` |
| `UPLOADS_DIR` | Path where uploaded images are saved | `../public/images/uploads` |

---

## Database

### Schema overview

| Table | Type | Description |
|---|---|---|
| `admins` | Collection | CMS login accounts (email + bcrypt hash) |
| `pigs` | Collection | Pig listings with image, description, sort order |
| `services` | Collection | Services with title, description, SVG icon |
| `gallery_images` | Collection | Photo gallery with src path and alt text |
| `farm_info` | Single row | Contact details, location, and business hours |
| `about_content` | Single row | Story paragraphs, mission, vision, story image |

`farm_info` and `about_content` are single-row tables — they are always updated via upsert (`ON CONFLICT (id) DO UPDATE`), never inserted fresh.

### Scripts

```bash
npm run db:schema   # Apply schema.sql — creates tables, safe to re-run (IF NOT EXISTS)
npm run db:seed     # Insert the default admin account
```

---

## Admin CMS

Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) — you will be redirected to the login page.

### Default Login Credentials

| Field | Value |
|---|---|
| Email | `admin@redwoodhogsfarm.com` |
| Password | `changeme123` |

> **Change this password immediately before deploying to production.**

### Admin Sections

| Route | Description |
|---|---|
| `/admin/dashboard` | Overview: content counts and quick-action links |
| `/admin/pigs` | List, create, edit, and delete pig listings |
| `/admin/services` | List, create, edit, and delete farm services |
| `/admin/gallery` | Upload gallery photos, delete images, batch reorder |
| `/admin/farm-info` | Edit farm name, location, email, phone, and business hours |
| `/admin/about` | Edit the story heading, three story paragraphs, story image, mission, and vision |

### Admin UI Components

| Component | Purpose |
|---|---|
| `AdminSidebar` | Left navigation with links to all admin sections |
| `AdminHeader` | Top bar with page title derived from pathname and a logout button |
| `Toast` | Slide-in notification (success/error) that auto-dismisses after 3.5 s |
| `ConfirmDialog` | Modal that requires confirmation before destructive actions |
| `ImageUpload` | Drag-and-drop zone with live preview — uploads immediately and returns a URL |

---

## API Reference

Interactive Swagger documentation is served at:

```
http://localhost:3001/api/docs
```

The raw OpenAPI JSON spec is available at:

```
http://localhost:3001/api/docs.json
```

### Endpoints summary

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/login` | No | Log in — sets `admin_token` cookie |
| POST | `/api/auth/logout` | Cookie | Clear session cookie |
| GET | `/api/auth/me` | Cookie | Get current admin identity |
| GET | `/api/pigs` | Cookie | List all pigs |
| GET | `/api/pigs/:id` | Cookie | Get pig by ID |
| POST | `/api/pigs` | Cookie | Create pig |
| PATCH | `/api/pigs/:id` | Cookie | Update pig |
| DELETE | `/api/pigs/:id` | Cookie | Delete pig |
| GET | `/api/services` | Cookie | List all services |
| GET | `/api/services/:id` | Cookie | Get service by ID |
| POST | `/api/services` | Cookie | Create service |
| PATCH | `/api/services/:id` | Cookie | Update service |
| DELETE | `/api/services/:id` | Cookie | Delete service |
| GET | `/api/gallery` | Cookie | List all gallery images |
| GET | `/api/gallery/:id` | Cookie | Get gallery image by ID |
| POST | `/api/gallery` | Cookie | Upload image + create record (multipart) |
| PATCH | `/api/gallery/:id` | Cookie | Update image metadata |
| DELETE | `/api/gallery/:id` | Cookie | Delete record + physical file |
| PATCH | `/api/gallery/reorder/batch` | Cookie | Batch update sort order |
| GET | `/api/farm-info` | Cookie | Get farm contact info |
| PUT | `/api/farm-info` | Cookie | Update farm contact info |
| GET | `/api/about` | Cookie | Get about page content |
| PUT | `/api/about` | Cookie | Update about page content |
| POST | `/api/upload` | Cookie | Upload a single image, returns `{ url }` |
| GET | `/api/health` | No | Health check — returns `{ status: "ok" }` |

---

## Authentication

### Flow

```
1. POST /api/auth/login  { email, password }
       ↓
2. Backend bcrypt.compare(password, hash)
       ↓
3. jwt.sign({ id, email }, JWT_SECRET) → token
       ↓
4. res.cookie('admin_token', token, { httpOnly: true, sameSite: 'lax' })
       ↓
5. Browser stores cookie (inaccessible to JavaScript)
       ↓
6. Every /admin/* page load → middleware.ts reads cookie → jose.jwtVerify()
       ↓
7. Every /api/* call    → verifyToken middleware → jwt.verify()
```

### Why two JWT checks?

- **`middleware.ts` (Next.js Edge)** — runs before any page renders. Uses `jose` because the Next.js Edge Runtime does not support the Node.js `crypto` module required by `jsonwebtoken`.
- **`verifyToken` (Express)** — re-validates on every API call. Ensures the backend is never bypassed even if someone were to call the API directly without going through the Next.js layer.

---

## Image Uploads

Uploaded files are saved to `public/images/uploads/` (relative path from the Next.js project root, configured via the `UPLOADS_DIR` env variable in the backend).

Next.js automatically serves everything in `public/` as static assets, so a file saved at `public/images/uploads/photo.jpg` is immediately accessible at `http://localhost:3000/images/uploads/photo.jpg`.

**Constraints (configured in `backend/src/middleware/upload.ts`):**
- Accepted types: JPEG, PNG, WebP, GIF
- Maximum size: 10 MB
- Filenames: `Date.now()-originalname` (collision-safe)

When a gallery image is deleted via `DELETE /api/gallery/:id`, the physical file is also removed from disk with `fs.unlinkSync`.

---

## Public Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, pig listings preview, services overview, gallery preview |
| `/about` | Farm story with three paragraphs, mission and vision statements |
| `/pigs` | Full pig listings with care and nutrition details |
| `/services` | All farm services in a card grid |
| `/gallery` | Full photo gallery |
| `/contact` | Contact form with farm details |

---

## Scripts Reference

### Frontend (project root)

```bash
npm run dev       # Start Next.js in development mode (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Backend (`cd backend`)

```bash
npm run dev       # Start Express with ts-node-dev (hot reload, http://localhost:3001)
npm run build     # Compile TypeScript to dist/
npm run start     # Start compiled production server
npm run db:schema # Apply schema.sql to the database (creates tables, safe to re-run)
npm run db:seed   # Insert the default admin account
```
