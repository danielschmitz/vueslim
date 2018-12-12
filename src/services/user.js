import http from './http'

const userService = {
  /**
   * Get all users
   */
  getAll: () => http.get('/api/users'),
  save: data => http({
    method: 'id' in data ? 'put' : 'post',
    url: 'id' in data ? `/api/user/${data.id}` : '/api/user',
    data
  }),
  delete: id => http.delete(`/api/user/${id}`)
}

export default userService
