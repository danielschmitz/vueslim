const router = require('express').Router()
const db = require('../libs/db')

router.get('/admin/create-tables', (req, res, next) => {
  const users = db.schema.dropTableIfExists('users').then(() => {
    return db.schema
      .createTable('users', t => {
        t.increments('id').primary()
        t.string('first_name', 100)
        t.string('last_name', 100)
        t.string('email', 200)
      })
      .then(result => {
        return db.schema.dropTableIfExists('tasks').then(() => {
          return db.schema.createTable('tasks', t => {
            t.increments('id').primary()
            t.string('name', 100)
            t.integer('user_id')
            t.foreign('user_id')
              .references('id')
              .inTable('users')
          })
        })
      })
  })

  Promise.all([users])
    .then(() => res.send('Tabelas Recriadas'))
    .catch(error => next(error))
})

module.exports = router
