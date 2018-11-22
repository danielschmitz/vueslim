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

// express instance
const app = express()

boomHttp(app)
staticDir(app, express.static('./dist'), '/')
cors(app)
bodyParser(app)
router(app)
errorHandler(app)
start(app)
