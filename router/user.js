
const router = require('express').Router()
const db = require('../libs/db')

router.get('/users', (req, res, next) => {
  db.select().table('users').then(users => {
    res.send(users)
  }).catch(e => next(e))
})

module.exports = router
