
const router = require('express').Router()
const db = require('../libs/db')

router.get('/users', (req, res) => {
  return db.select().from('users')
})

module.exports = router
