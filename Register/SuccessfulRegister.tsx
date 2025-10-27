import { CodeEmailForm } from '../../components/AuthUser/CodeEmailForm'
import { TranslationContext } from '../../Context/TranslationContext'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
export const SuccessfulRegister = () => {
  const { language } = useContext(TranslationContext)
  const navigate = useNavigate()
  const handleSuccess = () => {
    // Acción cuando el código es correcto
    navigate('/user')
  }
  return (
    <div className="flex justify-center px-4 pt-8">
      <div className="w-full md:w-1/2 max-w-xl">
        <CodeEmailForm onSuccess={handleSuccess} />
      </div>
    </div>
  )
}
