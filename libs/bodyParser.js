const BodyParser = require('body-parser')

const bodyParser = app => {
  app.use(BodyParser.json())
  app.use(BodyParser.urlencoded({ extended: true }))
}

module.exports = bodyParser
