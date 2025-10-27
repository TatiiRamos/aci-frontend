export interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: () => void
  isStandalone?: boolean
  openPaymentModal?: () => void
}

export type AuthStep = 'login' | 'register' | 'code'
