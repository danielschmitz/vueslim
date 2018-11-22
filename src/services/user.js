import http from './http'

const user = {
  getAll: () => this.http.get('/users')
}

export default user
