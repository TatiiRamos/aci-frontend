import React, { createContext, useRef, ReactNode } from 'react'

interface ScrollContextType {
  aboutACIRef: React.RefObject<HTMLDivElement>
}

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
)

interface ScrollProviderProps {
  children: ReactNode
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const aboutACIRef = useRef<HTMLDivElement>(null)

  return (
    <ScrollContext.Provider value={{ aboutACIRef }}>
      {children}
    </ScrollContext.Provider>
  )
}
