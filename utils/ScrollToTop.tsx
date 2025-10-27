import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll al inicio de la página cuando cambia la ruta
    window.scrollTo(0, 0)
  }, [pathname])

  return null // Este componente no renderiza nada en la interfaz
}

export default ScrollToTop
