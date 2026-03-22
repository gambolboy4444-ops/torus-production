import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function GET() {
  const result = await pool.query('SELECT * FROM torus_state LIMIT 1')
  return NextResponse.json(result.rows[0])
}