import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18n' // Inicializar i18next
import { Provider } from 'react-redux'
import { ScrollProvider } from './Context/ScrollContext'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { store } from './redux/Store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ScrollProvider>
      <PayPalScriptProvider
        options={{
          clientId:
            'AQASdm-hZhlZI2wjRssNTpZ2MDjSJPlqEWbrys540B8i2W9qIZnjafvUNpZf5yR3wgKL7lXvTtvJw7hb'
        }}
      >
        <App />
      </PayPalScriptProvider>
    </ScrollProvider>
  </Provider>
)
