import pg from "pg";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const { rows } = await pool.query("select current_user, current_database(), version()");
console.log(rows[0]);
await pool.end();