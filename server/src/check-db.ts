import { pool } from "./db.js";

const { rows } = await pool.query(
  "SELECT version(), current_database(), inet_server_addr()"
);
console.log(rows[0]);