
const router = require('express').Router()
const db = require('../libs/db')

router.get('/users', (req, res, next) => {
  db.select().table('users').then(users => {
    res.send(users)
  }).catch(e => next(e))
})

router.post('/user', (req, res, next) => {
  console.log(req.body)
  db('users').insert(req.body).returning('*').then(user => {
    res.send(user)
  })
})

module.exports = router
