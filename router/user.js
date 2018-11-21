
const router = require('express').Router()

router.get('/users', (req, res) => {
  res.send('hello users')
})

module.exports = router
