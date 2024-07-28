import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/HomeComponents/Header/Header';
import Shop from './pages/Shop/Shop';
import ErrorPage from './pages/Error/ErrorPage';
import Footer from './components/HomeComponents/Footer/Footer';
import './App.css'
import Login from './components/RegisterComponents/Login/Login';
import SignIn from './components/RegisterComponents/SignIn/SignIn'
import ShopCart from './pages/ShopCart/ShopCart';
import FavoriteCart from './pages/FavoriteCart/FavoriteCart';
import Profile from './pages/Profile/Profile';
import ProductDetail from './pages/ProductDetail/ProductDetail';
// import ProtectedRoute from './protectedRoute'



const App = () => {
  // const isAuthenticated = false;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/shopCart" element={  <ShopCart />} />
       
           
        
            {/* <Route path="/shopCart" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ShopCart />
              </ProtectedRoute>
            } />  */}
        <Route path="/favoriteCart" element={<FavoriteCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};




export default App;