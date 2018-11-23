
const router = require('express').Router()
const db = require('../libs/db')

router.get('/users', (req, res, next) => {
  db.select().table('users').then(users => {
    res.send(users)
  }).catch(e => next(e))
})

router.post('/user', (req, res, next) => {
  db('users').insert(req.body).then(user => {
    res.send(user)
  })
})

router.put('/user/:id', (req, res, next) => {
  const { id } = req.params
  db('users').update(req.body).where({ id }).then(() => {
    db('users').select().where({ id }).then(user => {
      res.json(user)
    }).catch(e => next(e))
  }).catch(e => next(e))
})

module.exports = router
