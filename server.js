// Node libs
const express = require('express')
require('dotenv').config()

// Project libs
const boomHttp = require('./libs/boomHttp')
const staticDir = require('./libs/staticDir')
const cors = require('./libs/cors')
const bodyParser = require('./libs/bodyParser')
const router = require('./router')
const errorHandler = require('./libs/error')
const start = require('./libs/start')

// check .env file at development
var fs = require('fs')
if (process.env.NODE_ENV !== 'production' && !fs.existsSync('./.env')) {
  throw new Error('.env file missing. Please copy from .env.example')
}

// express instance
const app = express()

boomHttp(app)
staticDir(app, express.static('./dist'), '/')
cors(app)
bodyParser(app)
router(app)
errorHandler(app)
start(app)
