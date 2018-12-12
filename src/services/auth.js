import http from './http'

const authService = {
  login: (user, password) => http.post('/auth', { user, password })
}

export default authService
