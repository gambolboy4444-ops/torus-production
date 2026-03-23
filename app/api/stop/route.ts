import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST() {
  const result = await pool.query(`
    UPDATE torus_state
    SET status = 'STOPPED',
        updated_at = NOW()
    WHERE id = 1
    RETURNING *;
  `);

  return NextResponse.json(result.rows[0]);
}