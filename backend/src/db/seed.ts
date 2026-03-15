/**
 * Run once after schema creation to create the first admin account.
 * Usage: npm run db:seed
 */
import * as bcrypt from 'bcryptjs'
import { Pool } from 'pg'
import * as dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

async function seed() {
  const email = process.env.ADMIN_EMAIL || 'admin@redwoodhogsfarm.com'
  const password = process.env.ADMIN_PASSWORD || 'changeme123'

  const hash = await bcrypt.hash(password, 10)

  await pool.query(
    `INSERT INTO admins (email, password)
     VALUES ($1, $2)
     ON CONFLICT (email) DO UPDATE SET password = $2`,
    [email, hash]
  )

  console.log(`✓ Admin seeded: ${email}`)
  console.log(`  Password: ${password}`)
  console.log('  Change this password immediately in production.')
  await pool.end()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
