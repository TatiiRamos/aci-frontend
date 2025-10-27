import React, { useContext, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TranslationContext } from '../../Context/TranslationContext'

export const ActivateAcount = () => {
  const { language } = useContext(TranslationContext)
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')
  const message = searchParams.get('message')

  const [finalMessage, setFinalMessage] = useState('')

  const translateMessage = (msg: string) => {
    if (language === 'es') {
      switch (msg) {
        case 'Account activated successfully':
          return '¡Su cuenta ha sido activada con éxito!'
        case 'Activation failed':
          return 'Hubo un problema al activar su cuenta.'
        case 'User not found or already active':
          return 'Usuario no encontrado o ya ha sido activado.'
        default:
          return msg
      }
    }
    return msg
  }

  useEffect(() => {
    if (status === '200') {
      setFinalMessage(
        message
          ? translateMessage(message)
          : language === 'es'
            ? '¡Su cuenta ha sido activada con éxito!'
            : 'Your account has been successfully activated!'
      )
    } else {
      setFinalMessage(
        message
          ? translateMessage(message)
          : language === 'es'
            ? 'Hubo un problema al activar su cuenta.'
            : 'There was a problem activating your account.'
      )
    }
  }, [language, status, message])
  return (
    <div>
      <p className="text-[24px] font-[700] font-Montserrat text-primary-blue text-center mx-auto my-[200px]">
        {finalMessage}
      </p>
      <p>{language}</p>
    </div>
  )
}
