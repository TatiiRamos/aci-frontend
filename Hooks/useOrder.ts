import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

import { BASE_URL } from '../api'
import { Order, PaypalOrderAPI } from '../types/interfacePaypalOrder'
import { TranslationContext } from '../Context/TranslationContext'

export const useOrder = (orderId: string) => {
  const { language } = useContext(TranslationContext)
  const [order, setOrder] = useState<Order>()
  const [orderDate, setOrderDate] = useState('')

  const getOrder = async () => {
    const url = `${BASE_URL}/payments/order/${orderId}`
    const { data } = await axios.get<PaypalOrderAPI>(url)
    const { order } = data
    setOrder(order)
  }

  const getTransactionDate = () => {
    const orderDate = order?.create_time
    const languageDate = language === 'es' ? 'es-ES' : 'en-EN'
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    const date = new Intl.DateTimeFormat(languageDate, options).format(
      orderDate
    )

    setOrderDate(date)
  }

  useEffect(() => {
    getTransactionDate()
  }, [language])

  useEffect(() => {
    getOrder()
  }, [])

  return {
    order,
    orderDate
  }
}
