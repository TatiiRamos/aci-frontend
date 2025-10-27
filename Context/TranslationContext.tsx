import { createContext, useContext } from 'react'
import { LanguageType, TranslationContextType } from '../types/interfaceContext'

export const TranslationContext = createContext<TranslationContextType>({
  language: 'es',
  setLanguage: (language: LanguageType) => {}
})

export const useTranslation = () => useContext(TranslationContext)
