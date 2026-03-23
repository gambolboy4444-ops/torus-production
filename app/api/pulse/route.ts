import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST() {
  const result = await pool.query(`
    UPDATE torus_state
    SET core_cash = core_cash + 1,
        nodes_count = nodes_count + 1,
        status = 'ONLINE',
        updated_at = NOW()
    WHERE id = 1
    RETURNING *;
  `);

  return NextResponse.json(result.rows[0]);
}