const { Pool } = require('pg')
require('dotenv').config()

function queryServiceFactory () {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  })
  return (text, params) => pool.query(text, params)
}

const dbService = app => {
  app.use((req, res, next) => {
    const db = {}
    Object.defineProperties(db, {
      query: {
        get: () => queryServiceFactory()
      }
    })
    req.$db = db
    next()
  })
}
module.exports = dbService
