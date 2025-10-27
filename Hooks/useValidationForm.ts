import { useTranslation } from '../Context/TranslationContext'
import { FormDataLogin, FormDataRegister } from '../types/interfaceForms'
const nameRegex: RegExp = /^[A-Za-z\s]+$/
const emailRegex: RegExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
const passwordRegex: RegExp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
const phoneRegex: RegExp = /^[+\d\s]+$/

// Hook to validate user login and registration form
// props: FormData optional (form data to validate linked fields)

export const useValidation = (FormData?: FormDataRegister | FormDataLogin) => {
  const { content, language } = useTranslation()
  //const t = content?.validateFormRegister?.[language]

  const validateName = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].name.empty
    if (trimmed.length < 2)
      return content?.validateFormRegister[language].name.length
    if (!nameRegex.test(trimmed))
      return content?.validateFormRegister[language].name.letter
  }
  const validateLastName = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].lastName.empty
    if (trimmed.length < 2)
      return content?.validateFormRegister[language].lastName.length
    if (!nameRegex.test(trimmed))
      return content?.validateFormRegister[language].lastName.letter
  }

  const validatePhone = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].phone.empty
    if (!phoneRegex.test(value))
      return content?.validateFormRegister[language].phone.number
  }
  const validateCountry = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].country.empty
    if (!nameRegex.test(value))
      return content?.validateFormRegister[language].country.letter
  }
  const validateCity = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].city.empty
    if (!nameRegex.test(value))
      return content?.validateFormRegister[language].city.letter
  }
  const validateEmail = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].email.empty
    if (!emailRegex.test(value))
      return content?.validateFormRegister[language].email.isEmail
  }
  const validatePassword = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].password.empty
    if (!passwordRegex.test(value))
      return content?.validateFormRegister[language].password.isPass
  }

  const validateRepeatPassword = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].repeat.empty
    if (FormData?.password && trimmed !== FormData.password.trim())
      return content?.validateFormRegister[language].repeatPassword.isPass
  }

  const validateLoginPassword = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].password.empty
  }
  const validateTermConditions = (value: boolean): string | undefined => {
    if (!value)
      return content?.validateFormRegister[language].termsConditions.isAccepeted
  }

  const validateEmailCode = (value: string): string | undefined => {
    const trimmed = value.trim()
    if (!trimmed) return content?.validateFormRegister[language].emailCode.empty
    if (trimmed.length < 6)
      return content?.validateFormRegister[language].emailCode.isPass
  }
  return {
    validateName,
    validateLastName,
    validatePhone,
    validateCountry,
    validateCity,
    validateEmail,
    validatePassword,
    validateRepeatPassword,
    validateLoginPassword,
    validateTermConditions,
    validateEmailCode
  }
}
