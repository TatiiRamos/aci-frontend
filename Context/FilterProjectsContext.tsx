import React, { createContext, useContext, useState, ReactNode } from 'react'

type FilterProjectsContextType = {
  filter: string
  changeFilter: (newFilter: string) => void
}

const FIlterProjectsContext = createContext<
  FilterProjectsContextType | undefined
>(undefined)

// Hook personalizado para usar el contexto
export const useFilter = () => {
  const context = useContext(FIlterProjectsContext)
  if (!context) {
    throw new Error('useFilter debe ser usado dentro de un FilterProvider')
  }
  return context
}

interface FilterProjectsProviderProps {
  children: ReactNode
}

export const FilterProjectsProvider: React.FC<FilterProjectsProviderProps> = ({
  children
}) => {
  const [filter, setFilter] = useState<string>(
    sessionStorage.getItem('filterProjectsByStatus') || 'all'
  )

  const changeFilter = (newFilter: string) => {
    sessionStorage.setItem('filterProjectsByStatus', newFilter)
    setFilter(newFilter)
  }

  return (
    <FIlterProjectsContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FIlterProjectsContext.Provider>
  )
}
