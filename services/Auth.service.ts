import axios from 'axios'
import { BASE_URL } from '../api'
import { FormDataRegister } from '../types/interfaceForms'

interface ApiUser {
  firstName: string
  lastName: string
  email: string
  role: 'client' | 'admin' | 'superAdmin'
  img: string
  country: string
  city: string
  telUser: string
  nameContact: string
  telContact: string
}

export const authService = {
  login: (data: { email: string; password: string }) => {
    return axios
      .post(BASE_URL + '/auth/login/', data)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
      .catch((error) => {
        console.error('Login error:', error)
        throw error
      })
  },
  loginOAuth: (data: { credential: string }) => {
    return axios
      .post(BASE_URL + '/auth/google-login', data)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
      .catch((error) => {
        console.error('Login error:', error)
        throw error
      })
  },
  logout: () => {
    localStorage.removeItem('user')
  },

  signup: async (data: FormDataRegister) => {
    const userData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      country: data.country,
      city: data.city,
      phone: data.telUser,
      emergency_contact: data.nameContact,
      emergency_phone: data.telContact,
      role: 'client',
      language: data.language
    }

    const userPayload = {
      email: userData.email
      // puedes agregar más campos si quieres, por ejemplo nombre o id
    }
    localStorage.setItem('user', JSON.stringify(userPayload))

    return await axios.post(BASE_URL + '/users', userData).catch((error) => {
      console.error('Signup error:', error)
      throw error
    })
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user')
    try {
      return user ? JSON.parse(user) : null
    } catch (error) {
      console.error('Error parsing user JSON:', error)
      return null
    }
  },

  activateUser: (token: string) => {
    return axios
      .get(`${BASE_URL}/users/active?token=${token}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.error('Activation error:', error)
        throw error
      })
  },

  resentUserCode: (email: string, language: string) => {
    return axios
      .post(`${BASE_URL}/auth/resent-code`, { email, language }) // 👈 aquí va el token en el body

      .then((response) => response.data)
      .catch((error) => {
        console.error('Activation error:', error)
        throw error
      })
  },

  activateUserCode: (code: string, email: string) => {
    return axios
      .post(`${BASE_URL}/auth/code`, { code, email }) // 👈 aquí va el token en el body
      .then((response) => response.data)
      .catch((error) => {
        console.error('Activation error:', error)
        throw error
      })
  },
  isAuthorized: () => {
    return localStorage.getItem('user') !== null
  },

  userRole: () => {
    const user = localStorage.getItem('user')
    let parsedUser
    try {
      parsedUser = user ? (JSON.parse(user) as ApiUser) : null
    } catch (error) {
      console.error('Error parsing user JSON:', error)
      parsedUser = null
    }
    return parsedUser?.role
  },
  newPassword: (data: { password: string; token: string }) => {
    return axios
      .post(BASE_URL + '/auth/new-password', data)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
      .catch((error) => {
        console.error('Login error:', error)
        throw error
      })
  },
  resetPassword: (data: { email: string }) => {
    return axios
      .post(BASE_URL + '/auth/reset-password', data)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
      .catch((error) => {
        console.error('Login error:', error)
        throw error
      })
  }
}
