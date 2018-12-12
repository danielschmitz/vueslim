const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY
const expiresIn = process.env.EXPIRES

// Verifica se o token é válido, de acordo com o SECRECT
function verifyToken (token) {
  return jwt.verify(token, SECRET_KEY)
}

// Create a token from a payload & Secrect key
function createToken (payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Check if the user exists in database
function isAuthenticated (user, password) {
  return ((user === 'bond') && (password === '123'))
}

const index = app => {
  //
  // Post para /auth faz um "login"
  //
  app.post('/auth', (req, res) => {
    const { user, password } = req.body
    const authResult = isAuthenticated(user, password)
    if (authResult === 'undefined' || authResult === false) {
      const status = 401
      const message = 'Incorrect user or password'
      res.status(status).json({ status, message })
      return
    }
    const token = createToken({ user, password })
    res.status(200).json({ token })
  })
  //
  // Qualquer rota que tenha "/api" deve ter token
  //
  app.use('/api', (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next()
      return
    }
    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      const status = 401
      const message = 'Bad authorization header'
      res.status(status).json({ status, message })
      return
    }
    try {
      let decode = verifyToken(req.headers.authorization.split(' ')[1])
      if (decode !== undefined) {
        let { email, password } = decode
        const refreshToken = createToken({ email, password })
        res.set('Refresh', [refreshToken])
      }
      next()
    } catch (err) {
      const status = 401
      const message = 'Error: token is not valid'
      res.status(status).json({ status, message })
    }
  })
}
module.exports = index
