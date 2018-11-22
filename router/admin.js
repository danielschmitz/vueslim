const router = require('express').Router()

router.get('/admin/create-tables', (req, res, next) => {
  const queries = [
    /* sql */ `DROP TABLE IF EXISTS users`,
    /* sql */ `CREATE TABLE users(id SERIAL PRIMARY KEY, firstName VARCHAR(100) not null, lastName VARCHAR(100), email VARCHAR(100))`
  ]

  req.$db.query(queries.join('; '), null)
    .then(result => res.send(result))
    .catch(error => next(error))
})

module.exports = router
