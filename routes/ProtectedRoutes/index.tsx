import { Navigate, useLocation, useOutlet } from 'react-router-dom'
import { authService } from '../../services/Auth.service'

export const ProtectedLayout = () => {
  const user = authService.isAuthorized()
  const outlet = useOutlet()
  const role = authService.userRole()
  const location = useLocation()

  console.log('Desde rutas protegidas', user)

  console.log('Role: ', role)

  if (!user) {
    return <Navigate to="/login" />
  }
  if (location.pathname.startsWith('/superadmin') && role !== 'superAdmin') {
    return <Navigate to="/login" />
  }

  if (location.pathname.startsWith('/user') && role !== 'client') {
    return <Navigate to="/login" />
  }

  return <>{outlet}</>
}
