require('dotenv').config()

const isProd = process.env.NODE_ENV === 'production'

const errorHandler = app => {
  app.use((err, req, res, _next) => {
    if (isProd) {
      console.error(err)
      res
        .status(500)
        .send({ message: 'Houve um erro no servidor', code: err.code })
    } else {
      res.status(500).send({ message: err.message, code: err.code })
    }
  })
}
module.exports = errorHandler
