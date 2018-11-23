import http from './http'

const userService = {
  /**
   * Get all users
   */
  getAll: () => http.get('/users'),
  save: data => http({
    method: 'id' in data ? 'put' : 'post',
    url: 'id' in data ? `/user/${data.id}` : '/user',
    data
  }),
  delete: id => http.delete(`/user/${id}`)
}

export default userService
