import { useEffect, useState } from 'react'
import { http } from '../services/http'
import { UserAPI } from '../types/interfaceUserApi'

export const useUser = () => {
  const [data, setData] = useState<any>(undefined)
  const [error, setError] = useState<undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const get = async () => {
    const userFromStorage = localStorage.getItem('user')
    if (userFromStorage && userFromStorage.includes('id')) {
      const newData = JSON.parse(userFromStorage)
      setData(newData)
      return newData
    }

    setIsLoading(true)
    try {
      const userApi = await http.get<UserAPI>('users/profile/account')

      const mappedUser = {
        id: userApi.id,
        firstName: userApi.first_name,
        lastName: userApi.last_name,
        email: userApi.email,
        telUser: userApi.phone,
        role: userApi.role,
        state: userApi.state,
        img: userApi.profile_img,
        country: userApi.country,
        city: userApi.city,
        zip: userApi.zip,
        nameContact: userApi.emergency_contact,
        telContact: userApi.emergency_phone,
        login: userApi.login,
        createdAt: new Date(userApi.created_at),
        updatedAt: new Date(userApi.updated_at)
      }

      const newStoragedUser = userFromStorage
        ? { ...JSON.parse(userFromStorage), ...mappedUser }
        : mappedUser
      localStorage.setItem('user', JSON.stringify(newStoragedUser))

      setData(mappedUser)

      return mappedUser
    } catch (e: any) {
      setError(e)
      console.error(e)
    }
    setIsLoading(false)
  }

  // 🔹 Escuchar cambios en localStorage (autologin o logout)

  useEffect(() => {
    const handleStorageChange = () => {
      const userFromStorage = localStorage.getItem('user')
      setData(userFromStorage ? JSON.parse(userFromStorage) : undefined)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return { data, error, isLoading, get }
}
