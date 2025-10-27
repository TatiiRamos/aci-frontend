import React, { createContext, useContext, ReactNode, useState } from 'react'

interface SidebarContextProps {
  selected: string
  setSelected: (value: string) => void
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

interface SidebarProviderProps {
  children: ReactNode
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children
}) => {
  const [selected, setSelected] = useState<string>('Mi Perfil')

  return (
    <SidebarContext.Provider value={{ selected, setSelected }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar debe ser utilizado dentro de SidebarProvider')
  }
  return context
}
