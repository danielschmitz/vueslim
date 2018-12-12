import http from './http'

const admin = {
  createTables: () => http.get('/api/admin/create-tables')
}

export default admin
