import { useEffect, useState } from 'react';
import './ProductsCard.css';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import AddToCart from '../Toast/AddToCart/AddToCart';
import Exists from '../Toast/Exists/Exists';
import { Succesfull, Warning } from '../../../assets';




const ProductsCard = ({ id, image, title, category, price, description }) => {
  const [favorites, setFavorites] = useState([]);
  const [shopCart, setShopCart] = useState([]);
  const [notificationType, setNotificationType] = useState(null);
  const [isCartDisabled, setIsCartDisabled] = useState(false); // New state for disabling the cart button

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const savedShopCart = JSON.parse(localStorage.getItem('shopCart')) || [];
    setShopCart(savedShopCart);
  }, []);

  const addToFavorites = () => {
    const newFavorite = { id, image, title, category, price, description };
    const isFavoriteExists = favorites.some(favorite => favorite.id === id);
    if (!isFavoriteExists && favorites.length < 8) {
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else if (isFavoriteExists) {
      alert('Этот товар уже добавлен в избранное.');
    } else if (favorites.length >= 8) {
      alert('Можно добавить до 8 товаров в избранное.');
    }
  };

  const addShopCart = () => {
    if (isCartDisabled) return; // Prevent action if button is disabled
  
    const newShopCart = { id, image, title, category, price, description };
  
    // Use functional updates to ensure the latest state
    setShopCart(prevShopCart => {
      const isShopCartExists = prevShopCart.some(item => item.id === id);
      
      if (!isShopCartExists && prevShopCart.length < 5) {
        const updatedShopCart = [...prevShopCart, newShopCart];
        localStorage.setItem('shopCart', JSON.stringify(updatedShopCart));
        handleAddToCart('added');
        return updatedShopCart;
      } else if (isShopCartExists) {
        handleAddToCart('exists');
        return prevShopCart; // No change if item already exists
      } else if (prevShopCart.length >= 5) {
        alert('Можно добавить до 5 товаров в корзину.');
        return prevShopCart; // No change if cart is full
      }
      
      return prevShopCart; // Default return if none of the conditions are met
    });
  
    // Disable the button
    setIsCartDisabled(true);
  
    // Re-enable the button after 5 seconds
    setTimeout(() => {
      setIsCartDisabled(false);
    }, 5000);
  };

  const handleAddToCart = (type) => {
    setNotificationType(type);
    setTimeout(() => {
      setNotificationType(null);
    }, 3000);
  };

  return (
    <>
      {notificationType === 'added' && (
        <AddToCart message={
          <>
            Your product has been successfully added to your cart 
            <img src={Succesfull} alt="Success" className="notification__icon" />
          </>
        } />
      )}
      {notificationType === 'exists' && (
        <Exists message={
          <>
            This product is already in your cart 
            <img src={Warning} alt="Warning" className="notification__icon__exists" />
          </>
        } />
      )}
      <div className="projects__card anim-items">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
        <div className="projects__card__content flex">
          <div className="projects__card__text__content">
            <div className="projects__card__modern">{title}</div>
            <div className="projects__card__decor">{category}</div>
            <div className="projects__card__description">{description}</div>
          </div>
          <div className="price">{price}$</div>
          <button className="favoritesButton">
            <FaRegHeart className="heart" onClick={addToFavorites} />
            <FiShoppingCart
              className={`cart ${isCartDisabled ? 'disabled' : ''}`}
              onClick={addShopCart}
              style={{ cursor: isCartDisabled ? 'not-allowed' : 'pointer' }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;