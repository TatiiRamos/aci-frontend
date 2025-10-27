import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ContextProvider } from './Context/ContextProvider'
import router from './routes'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const baseApiConutries = 'https://restcountries.com'
export const baseBackEnd = 'https://apidevelop.awaqinternship.org'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      mirror: false
    })
  }, [])

  return (
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextProvider>
  )
}

export default App
