const boom = require('express-boom')

const boomHttp = app => {
  app.use(boom())
}

module.exports = boomHttp
