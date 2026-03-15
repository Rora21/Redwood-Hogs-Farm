import { Pool, QueryResult } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

pool.on('error', (err) => {
  console.error('Unexpected database error:', err)
})

export const query = (text: string, params?: unknown[]): Promise<QueryResult> =>
  pool.query(text, params)

export default pool
