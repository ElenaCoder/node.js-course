const { Pool } = require('pg')

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "movie",
  password: 30032003
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}