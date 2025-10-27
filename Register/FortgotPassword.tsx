import React, { useState, useContext } from 'react'
import { InputField } from '../../components/Inputs/InputField'
import { useForm } from 'react-hook-form'
import { TranslationContext } from '../../Context/TranslationContext'
import Swal from 'sweetalert2'
import { authService } from '../../services/Auth.service'
interface FormData {
  email: string
  language: string
}

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const { language } = useContext(TranslationContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    console.log(`Correo: ${data.email}`)
    data.language = language
    await authService.resetPassword(data)
    Swal.fire({
      title:
        language === 'es'
          ? ' Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.'
          : 'If the email is registered, you will receive a link to reset your password.',
      icon: 'success',
      confirmButtonColor: '#BEC624'
    })
    reset()
    setLoading(false)
  })

  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-delay="200"
      className="flex justify-center mt-14 items-center flex-col font-Montserrat"
    >
      <div>
        <form
          className="flex flex-col w-[300px] h-auto mb-52 sm:mb-10 sm:mt-14 md:mt-20 lg:mb-14 md:mb-14"
          onSubmit={onSubmit}
        >
          <img
            src="https://r2.awaqinternship.org/Nav%2FLogo_horizontal_verde_color-min.png"
            className="h-[49] w-[111px] mx-auto"
            alt=""
          />

          {/* Email */}
          <div className="pt-10">
            <InputField
              id="email"
              label={
                language === 'es'
                  ? 'Ingrese su correo electrónico'
                  : 'Enter Your Email'
              }
              placeholder={
                language === 'es' ? 'Correo electrónico' : 'Email Address'
              }
              type="email"
              register={register('email', {
                required: {
                  value: true,
                  message:
                    language === 'es'
                      ? 'Correo electrónico requerido'
                      : 'Email is required'
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <input
            type="submit"
            value={
              loading
                ? language === 'es'
                  ? 'Procesando...'
                  : 'Processing...'
                : language === 'es'
                  ? 'Restablecer'
                  : 'Reset'
            }
            disabled={loading}
            placeholder="Iniciar sesion"
            // value={language === 'es'? 'Restablecer': 'Reset'}
            className={` placeholder:text-primary-blue text-center flex 
                min-w-[101px] my-2 justify-center items-center text-[16px] font-bold 
                rounded-[20px] z-20 rounded-br-none px-6 py-[13px]
                sm:min-w-[70px] bg-primary-green  ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          />
        </form>
      </div>
    </div>
  )
}
