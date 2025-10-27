import axios from 'axios'
import { BASE_URL } from '../api'
import { FormDataIncident } from '@/types/incidencias/incidencia'
export const incidentService = {
  newIncident: async (data: FormData) => {
    return await axios
      .post(BASE_URL + '/incidents', data)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.error('Incident error:', error)
        throw error
      })
  }
}
