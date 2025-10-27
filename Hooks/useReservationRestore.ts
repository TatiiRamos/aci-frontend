import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { decodeReservationData } from '../utils/reservationUtils'

export const useReservationRestore = (onDataRestore: (data: any) => void) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const reservationParam = urlParams.get('reservation')

    if (reservationParam) {
      const restoredData = decodeReservationData(reservationParam)

      if (restoredData) {
        onDataRestore(restoredData)
        navigate(location.pathname, { replace: true })
      }
    }
  }, [location.search, navigate, onDataRestore])
}
