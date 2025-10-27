import { AuthStep } from './interfaceAuthModal'

export interface LoginFormProps {
  onSuccess?: () => void
  redirectAfterLogin?: string
  hasLogo?: boolean
  setCurrentStep?: (step: AuthStep) => void
}

export interface RegisterFormProps {
  onSuccess?: (options: { isOAuth: boolean }) => void
  previousStep?: () => void
  hasLogo?: boolean
  fromModal?: boolean
}

export interface CodeFormProps {
  onSuccess: () => void
  fromModal?: boolean
  openPaypalModal?: () => void
}

//FormData
export interface FormDataLogin {
  email: string
  password: string
}

export interface FormDataRegister {
  firstName: string
  lastName: string
  country: string
  city: string
  prefijo: string
  phone: string
  telUser: string
  telContact: string
  nameContact: string
  email: string
  password: string
  repeatPassword: string
  checkBox: boolean
  language: string
}

export interface FormDataEmailCode {
  code: string
}
