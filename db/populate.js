const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  quantity INTEGER NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL
);

INSERT INTO categories (name, description) VALUES
    ('Electronics', 'Gadgets and devices'),
    ('Furniture', 'Home and office furniture');

INSERT INTO items (name, description, price, quantity, category_id) VALUES
    ('Laptop', 'A powerful gaming laptop', 1500.00, 10, 1),
    ('Desk', 'An ergonomic office desk', 300.00, 5, 2);
`;

async function main() {
  const client = new Client({
    host: process.env.HOST_NAME,
    database: process.env.DATABASE_NAME,
    user: process.env.ROLE_NAME,
    password: process.env.ROLE_PASSWORD,
    port: process.env.DATABASE_PORT,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Seeding completed!");
  } catch (err) {
    console.error("Error while seeding:", err);
  } finally {
    await client.end();
  }
}

main();
