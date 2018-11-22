import http from './http'

const userService = {
  /**
   * Get all users
   */
  getAll: () => http.get('/users')
}

export default userService
