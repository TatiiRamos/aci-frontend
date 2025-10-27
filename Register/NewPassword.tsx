import React, { useState, useContext } from 'react'
import { InputField } from '../../components/Inputs/InputField'
import { useForm } from 'react-hook-form'
import { TranslationContext } from '../../Context/TranslationContext'
import Swal from 'sweetalert2'
import { authService } from '../../services/Auth.service'
import axios from 'axios'
interface FormData {
  password: string
  confirmPassword: string
  token: string
}
const eye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
)

const eyeSlash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
)
export const NewPassword = () => {
  const { language } = useContext(TranslationContext)
  const [visibilityPassword, setVisibilityPassword] = useState(false)
  const [visibilityConfirmPassword, setVisibilityConfirmPassword] =
    useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    const token = new URLSearchParams(window.location.search).get('token')

    if (!token) {
      setLoading(false)
      return Swal.fire({
        title:
          language === 'es'
            ? 'Token inválido o expirado'
            : 'Invalid or expired token',
        icon: 'error',
        confirmButtonColor: '#BEC624'
      })
    }

    if (data.password !== data.confirmPassword) {
      setLoading(false)
      return Swal.fire({
        title:
          language === 'es'
            ? 'Las contraseñas no coinciden'
            : 'Passwords do not match',
        icon: 'warning',
        confirmButtonColor: '#BEC624'
      })
    }

    try {
      await authService.newPassword({
        password: data.password,
        token
      })

      Swal.fire({
        title:
          language === 'es'
            ? '¡Tu contraseña ha sido actualizada exitosamente!'
            : 'Your password has been successfully updated!',
        icon: 'success',
        confirmButtonColor: '#BEC624'
      })
      reset() // ✅ limpia los campos del formulario
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message

        return Swal.fire({
          title:
            language === 'es'
              ? message === 'El token ha expirado'
                ? 'El token ha expirado. Solicita uno nuevo.'
                : message || 'Error al actualizar la contraseña'
              : message === 'El token ha expirado'
                ? 'Token has expired. Please request a new one.'
                : message || 'Error updating password',
          icon: 'error',
          confirmButtonColor: '#BEC624'
        })
      } else {
        console.error(error)
        return Swal.fire({
          title: language === 'es' ? 'Error inesperado' : 'Unexpected error',
          icon: 'error',
          confirmButtonColor: '#BEC624'
        })
      }
    } finally {
      setLoading(false)
    }
  })

  const toggleVisibilityPassword = () => {
    setVisibilityPassword(!visibilityPassword)
  }

  const toggleVisibilityConfirmPassword = () => {
    setVisibilityConfirmPassword(!visibilityConfirmPassword)
  }

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

          {/* Password */}
          <div className="relative">
            <InputField
              id="password"
              label={language === 'es' ? 'Contraseña' : 'Password'}
              placeholder={language === 'es' ? 'Contraseña' : 'Password'}
              type={visibilityPassword ? 'text' : 'password'}
              register={register('password', {
                required:
                  language === 'es'
                    ? 'La contraseña es requerida'
                    : 'Password is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    language === 'es'
                      ? 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y una minúscula'
                      : 'Password must be at least 8 characters long and contain one uppercase and one lowercase letter'
                }
              })}
            />
            <span
              className="absolute right-4 top-5 cursor-pointer"
              onClick={toggleVisibilityPassword}
            >
              {visibilityPassword ? eye : eyeSlash}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="relative">
            <InputField
              id="confirmPassword"
              label={
                language === 'es' ? 'Confirmar contraseña' : 'Confirm Password'
              }
              placeholder={
                language === 'es' ? 'Confirmar contraseña' : 'Confirm Password'
              }
              type={visibilityConfirmPassword ? 'text' : 'password'}
              register={register('confirmPassword', {
                required:
                  language === 'es'
                    ? 'La confirmación de contraseña es requerida'
                    : 'Password confirmation is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    language === 'es'
                      ? 'La confirmación de contraseña debe tener al menos 8 caracteres, una letra mayúscula y una minúscula'
                      : 'Password must be at least 8 characters long and contain one uppercase and one lowercase letter'
                }
              })}
            />
            <span
              className="absolute right-4 top-5 cursor-pointer"
              onClick={toggleVisibilityConfirmPassword}
            >
              {visibilityConfirmPassword ? eye : eyeSlash}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
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
            //  value={language === 'es'? 'Restablecer': 'Reset'}
            className={` placeholder:text-primary-blue text-center flex 
                min-w-[101px] my-2 justify-center items-center text-[16px] font-bold 
                rounded-[20px] z-20 rounded-br-none px-6 py-[13px]
                sm:min-w-[70px] bg-primary-green 
                 ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          />
        </form>
      </div>
    </div>
  )
}
