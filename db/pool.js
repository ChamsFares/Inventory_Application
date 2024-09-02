const dotenv = require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.HOST_NAME,
  user: process.env.ROLE_NAME,
  database: process.env.DATABASE_NAME,
  password: process.env.ROLE_PASSWORD,
  port: process.env.DATABASE_PORT,
});
