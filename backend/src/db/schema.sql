-- ============================================================
-- Redwood Hogs Farm CMS — PostgreSQL Schema
-- Run: psql $DATABASE_URL -f src/db/schema.sql
-- ============================================================

-- Admin users (CMS login)
CREATE TABLE IF NOT EXISTS admins (
  id           SERIAL PRIMARY KEY,
  email        VARCHAR(255) NOT NULL UNIQUE,
  password     VARCHAR(255) NOT NULL,  -- bcrypt hash
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Pig listings
CREATE TABLE IF NOT EXISTS pigs (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  description  TEXT        NOT NULL DEFAULT '',
  image_url    VARCHAR(500)         DEFAULT '',
  sort_order   INTEGER              DEFAULT 0,
  is_active    BOOLEAN              DEFAULT TRUE,
  created_at   TIMESTAMPTZ          DEFAULT NOW(),
  updated_at   TIMESTAMPTZ          DEFAULT NOW()
);

-- Services offered
CREATE TABLE IF NOT EXISTS services (
  id           SERIAL PRIMARY KEY,
  title        VARCHAR(255) NOT NULL,
  description  TEXT        NOT NULL DEFAULT '',
  icon_svg     TEXT                 DEFAULT '',  -- raw SVG string
  sort_order   INTEGER              DEFAULT 0,
  is_active    BOOLEAN              DEFAULT TRUE,
  created_at   TIMESTAMPTZ          DEFAULT NOW(),
  updated_at   TIMESTAMPTZ          DEFAULT NOW()
);

-- Photo gallery
CREATE TABLE IF NOT EXISTS gallery_images (
  id           SERIAL PRIMARY KEY,
  src          VARCHAR(500) NOT NULL,
  alt          VARCHAR(500)         DEFAULT '',
  sort_order   INTEGER              DEFAULT 0,
  is_active    BOOLEAN              DEFAULT TRUE,
  created_at   TIMESTAMPTZ          DEFAULT NOW(),
  updated_at   TIMESTAMPTZ          DEFAULT NOW()
);

-- Farm contact & hours (single row, id = 1)
CREATE TABLE IF NOT EXISTS farm_info (
  id              SERIAL PRIMARY KEY,
  farm_name       VARCHAR(255)         DEFAULT 'Redwood Hogs Farm',
  location        VARCHAR(500)         DEFAULT '',
  email           VARCHAR(255)         DEFAULT '',
  phone           VARCHAR(100)         DEFAULT '',
  hours_weekday   VARCHAR(150)         DEFAULT '',
  hours_saturday  VARCHAR(150)         DEFAULT '',
  hours_sunday    VARCHAR(150)         DEFAULT '',
  updated_at      TIMESTAMPTZ          DEFAULT NOW()
);

-- About page content (single row, id = 1)
CREATE TABLE IF NOT EXISTS about_content (
  id               SERIAL PRIMARY KEY,
  story_heading    VARCHAR(255)         DEFAULT 'Our Story',
  story_text_1     TEXT                 DEFAULT '',
  story_text_2     TEXT                 DEFAULT '',
  story_text_3     TEXT                 DEFAULT '',
  story_image_url  VARCHAR(500)         DEFAULT '',
  mission_text     TEXT                 DEFAULT '',
  vision_text      TEXT                 DEFAULT '',
  updated_at       TIMESTAMPTZ          DEFAULT NOW()
);

-- ============================================================
-- Seed: single-row tables (safe to re-run)
-- ============================================================
INSERT INTO farm_info (id, farm_name, location, email, hours_weekday, hours_saturday, hours_sunday)
VALUES (
  1,
  'Redwood Hogs Farm',
  'Musha, Rwamagana District, Rwanda',
  'info@redwoodhogsfarm.com',
  'Monday – Friday: 8:00 AM – 5:00 PM',
  'Saturday: 8:00 AM – 2:00 PM',
  'Sunday: Closed'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO about_content (id, story_heading, story_text_1, mission_text, vision_text)
VALUES (
  1,
  'Our Story',
  'Redwood Hogs Farm began as a family dream to build a sustainable and responsible pig farming business.',
  'To promote sustainable pig farming while providing high-quality livestock and empowering farmers through training and support.',
  'To contribute to the growth of modern and sustainable pig farming in Rwanda and across Africa.'
) ON CONFLICT (id) DO NOTHING;

-- ============================================================
-- Seed: admin account
-- Password must be set via seed script (npm run db:seed)
-- which bcrypt-hashes the password before inserting.
-- ============================================================
