import { useContext, useState } from 'react'
import { useUser } from './useGetUsers'
import { TranslationContext } from '../Context/TranslationContext'
import {
  encodeReservationData,
  type ReservationData
} from '../utils/reservationUtils'

export const usePayment = (reservationData?: ReservationData) => {
  const { language } = useContext(TranslationContext)
  const [isOpenPayment, setIsOpenPayment] = useState(false)
  const [isOpenAuth, setIsOpenAuth] = useState(false)
  const { get: getUser } = useUser()

  const handleOpenPayment = async () => {
    const user = await getUser()

    if (!user) {
      setIsOpenAuth(true)
      return
    }

    setIsOpenPayment(true)
  }

  const handleLoginSuccess = () => {
    setIsOpenAuth(false)
    setIsOpenPayment(true)
  }

  const handlePaymentSuccess = () => {
    setIsOpenPayment(false)
  }

  const closeAuthModal = () => {
    setIsOpenAuth(false)
  }

  const closePaymentModal = () => {
    setIsOpenPayment(false)
  }

  return {
    isOpenPayment,
    isOpenAuth,
    setIsOpenPayment: handleOpenPayment,
    openPaymentModal: () => handleOpenPayment(),
    handleLoginSuccess,
    handlePaymentSuccess,
    closeAuthModal,
    closePaymentModal
  }
}
