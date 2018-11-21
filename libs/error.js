const errorHandler = app => {
  app.use((err, req, res, _next) => {
    res.status(500).send({ message: err.message, code: err.code, name: err.name })
  })
}
module.exports = errorHandler
