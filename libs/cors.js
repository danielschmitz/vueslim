const cors = require('cors')

const corsOptions = {
  exposedHeaders: 'Authorization'
}

const corsConfig = app => {
  app.use(cors(corsOptions))
}

module.exports = corsConfig
