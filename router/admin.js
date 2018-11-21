const router = require('express').Router()
const db = require('../libs/db')

router.get('/create-tables', (req, res, next) => {
  const queries = [
    'DROP TABLE IF EXISTS users',
    'CREATE TABLE users(id SERIAL PRIMARY KEY, firstName VARCHAR(100) not null, lastName VARCHAR(100), email VARCHAR(100))'
  ]

  db.query(queries.join('; '), null)
    .then(result => res.send(result))
    .catch(error => next(error))
})

module.exports = router
