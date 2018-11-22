require('dotenv').config()

const isProd = process.env.NODE_ENV === 'production'

const db = require('knex')(
  isProd
    ? {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
    : {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: process.env.DATABASE_URL
      }
    }
)

module.exports = db
