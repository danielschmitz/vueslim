import axios from 'axios'
import store from '../store'

const http = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

/**
 * Interceptador para todas as requisições do frontend ao backend
 * Se houver um token, envia o token no cabeçalho da requisição http
 */
http.interceptors.request.use(
  config => {
    const token = store.token
    if (token !== '') config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => Promise.reject(error)
)

export default http
