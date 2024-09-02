const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.HOST_NAME,
  database: process.env.DATABASE_NAME,
  user: process.env.ROLE_NAME,
  password: process.env.ROLE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

module.exports = pool;
