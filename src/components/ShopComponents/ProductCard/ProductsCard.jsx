import { useState } from 'react';
import './ProductsCard.css';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import AddToCart from '../Toast/AddToCart/AddToCart';
import Exists from '../Toast/Exists/Exists';
import { Succesfull, Warning } from '../../../assets';
import { useCart } from '../../../context/useContext';
import { useAuth } from '../../../context/AuthContext';
import { useFavorites } from '../../../context/FavoriteContext';
import AddToFavorites from '../Toast/AddToFavorites/AddToFavorites';
import ExistsFavorites from '../Toast/ExistsFavorites/ExistsFavorites'

const ProductsCard = ({ id, image, title, category, price, description }) => {
  const [notificationType, setNotificationType] = useState(null);
  const [isCartDisabled, setIsCartDisabled] = useState(false); // New state for disabling the cart button
  const { cartItems, addToCart } = useCart();
  const { favorites, addToFavorites } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    const newFavorite = { id, image, title, category, price, description };

    const isFavoriteExists = favorites.some(favorite => favorite.id === id);

    if (!isFavoriteExists && favorites.length < 8) {
      addToFavorites(newFavorite);
      handleAddToCart('addedToFavorites');
    } else if (isFavoriteExists) {
      handleAddToCart('existsFavorites');
    } else if (favorites.length >= 8) {
      alert('Можно добавить до 8 товаров в избранное.');
    }
  };

  const addShopCart = () => {
    if (!user) {
      navigate('/login');
      return;
    }
  
    if (isCartDisabled) return;
  
    const newShopCartItem = { id, image, title, category, price, description };
  
    if (cartItems.some(item => item.id === id)) {
      handleAddToCart('exists');
    } else if (cartItems.length < 5) {
      addToCart(newShopCartItem);
      handleAddToCart('added');
    } else {
      alert('Можно добавить до 5 товаров в корзину.');
    }
  
    setIsCartDisabled(true);
  
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
      {notificationType === 'addedToFavorites' && (
        <AddToFavorites message={
          <>
            Your product has been successfully added to your favorites
            <img src={Succesfull} alt="Success" className="notification__icon" />
          </>
        } />
      )}
      {notificationType === 'existsFavorites' && (
        <ExistsFavorites message={
          <>
            This product is already in your favorites
            <img src={Warning} alt="Warning" className="notification__icon__exists" />
          </>
        } />
      )}
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
            <FaRegHeart
              className={`heart ${isCartDisabled ? 'disabled' : ''}`}
              onClick={handleAddToFavorites}
              style={{ cursor: isCartDisabled ? 'not-allowed' : 'pointer' }}
            />
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