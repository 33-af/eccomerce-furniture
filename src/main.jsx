
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/useContext.jsx'
import { SearchProvider } from './context/searchContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <SearchProvider>
      <CartProvider>
      <AuthProvider>
        <App />
        </AuthProvider>
      </CartProvider>
    </SearchProvider>
 
)
