import { useNavigate } from 'react-router-dom';
import './FavoriteCart.css'
import { useFavorites } from '../../context/FavoriteContext';
import {  useState } from 'react';
import RemoveFromFavorites from '../../components/ShopComponents/Toast/RemoveFromFavorites/RemoveFromFavorites';


const FavoriteCart = () => {
  const { favorites, loading, removeFromFavorites, clearFavorites } = useFavorites();
  const [notificationType, setNotificationType] = useState(null);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="spinnerWrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  const handleRemove = (id) => {
    removeFromFavorites(id);
    showNotification('removedFromFavorites');
  };

  const handleClear = () => {
    clearFavorites();
  };

  const showNotification = (type) => {
    setNotificationType(type);
    setTimeout(() => {
      setNotificationType(null);
    }, 3000); 
  };

  return (
    <div className="shop-cart">
      {notificationType === 'removedFromFavorites' && (
        <RemoveFromFavorites message={
          <>
            Your product has been successfully removed from your cart ⛔
          </>
        } />
      )}
      <button className="return-button" onClick={() => navigate(-1)}>Go Back</button>
      {favorites.length === 0 ? (
        <div className="empty-message">No items have been added to favorites</div>
      ) : (
        <>
          <div className="button-wrapper">
            <button className="clear-button" onClick={handleClear}>Delete</button>
          </div>
          <div className="product-grid">
            {favorites.map((favorite) => (
              <div className="product-card" key={favorite.id}>
                <img src={favorite.image} alt={favorite.title} className="product-image" />
                <div className="product-info">
                  <h2 className="product-title">{favorite.title}</h2>
                  <p className="product-category">{favorite.category}</p>
                  <p className="product-description">{favorite.description}</p>
                  <div className="product-price">{favorite.price}$</div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(favorite.id)}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavoriteCart;