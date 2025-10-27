import axios from 'axios'
import authHeader from './AuthHeader'
import { BASE_URL } from '../api'

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: authHeader()
})

axiosPrivate.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('user')
    let token
    try {
      token = user ? JSON.parse(user) : null
    } catch (error) {
      console.error('Error parsing user JSON:', error)
    }

    if (config.headers !== undefined && token) {
      config.headers.Authorization = `Bearer ${token.accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosPrivate.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

const defaultHeaders = {
  'Content-Type': 'application/json'
}

// Función GET
const get = async <T>(url: string) => {
  const response = await axiosPrivate.get<T>(url, { headers: defaultHeaders })
  return response.data
}

// Función POST
const post = async <T>(
  url: string,
  body: any,
  customHeaders?: Record<string, string>
) => {
  const headers = {
    ...defaultHeaders,
    ...customHeaders
  }
  const response = await axiosPrivate.post<T>(url, body, { headers })
  return response.data
}

// Función PUT
const put = async <T>(url: string, body: any) => {
  const response = await axiosPrivate.put<T>(url, body, {
    headers: defaultHeaders
  })
  return response.data
}

// Función DELETE
const _delete = async <T>(url: string) => {
  const response = await axiosPrivate.delete<T>(url, {
    headers: defaultHeaders
  })
  return response.data
}

// Exportar las funciones HTTP
export const http = {
  get,
  post,
  put,
  delete: _delete
}

export default axiosPrivate
