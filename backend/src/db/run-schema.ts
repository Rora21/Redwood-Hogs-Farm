import * as fs from 'fs'
import * as path from 'path'
import { Pool } from 'pg'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

async function runSchema() {
  const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8')
  console.log('Running schema...')
  await pool.query(sql)
  console.log('Schema applied successfully.')
  await pool.end()
}

runSchema().catch(err => {
  console.error('Schema failed:', err.message)
  process.exit(1)
})
