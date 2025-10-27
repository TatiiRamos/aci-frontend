// import {InterfaceCountry} from "../types/interfaceCountry";
import { useEffect, useState } from 'react'
import { useTranslation } from '../Context/TranslationContext'
import { BASE_URL } from '../api'
import axios from 'axios'

export const useCountry = () => {
  const { language } = useTranslation()
  const [data, setData] = useState<Array<string>>([])
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const fetchData = async (): Promise<void> => {
    try {
      const { data } = await axios.get<
        { name: { common: string }; spanish: string }[]
      >(`${BASE_URL}/v3.1/all?fields=name,spanish`)
      const country = data.map((c) => {
        return c.name.common
      })

      setData(country.sort())
    } catch (error) {
      if (axios.isAxiosError(error))
        setError('Axios errorwith message:' + error.message)
      else setError(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [language])
  return [data, error, loading] as const
}
