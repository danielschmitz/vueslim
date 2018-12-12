const express = require('express')
const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

const index = app => {
  const router = express.Router()

  router.get('/', (req, res) => {
    res.boom.notFound()
  })

  //
  // Rotas Dinâmicas (le os arquivos das pastas)
  //
  fs.readdirSync(__dirname)
    .filter(file => {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      )
    })
    .forEach(file => {
      router.use('/', require(path.join(__dirname, file)))
    })

  //
  // Todas as rotas possuem o prefixo api.
  //
  app.use('/api', router)
}
module.exports = index
