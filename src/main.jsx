
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/useContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
    </CartProvider>
)
