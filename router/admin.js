const router = require('express').Router()
const db = require('../libs/db')

router.get('/admin/create-tables', (req, res, next) => {
  const users = db.schema.dropTableIfExists('users').then(() => {
    db.schema.createTable('users', t => {
      t.increments('id').primary()
      t.string('first_name', 100)
      t.string('last_name', 100)
      t.string('email', 200)
    })
  })
  const tasks = db.schema.dropTableIfExists('tasks').then(() => {
    db.schema.createTable('tasks', t => {
      t.increments('id').primary()
      t.string('name', 100)
    })
  })
  Promise.all([users, tasks]).then(() => res.send('Tabelas Recriadas'))
})

module.exports = router
