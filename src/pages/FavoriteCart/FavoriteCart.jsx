import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FavoriteCart.css'


const FavoriteCart = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
   
 
  
    useEffect(() => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(savedFavorites);
    }, []);
  
    const handleRemove = (id) => {
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };
  
    const handleClear = () => {
      setFavorites([]);
      localStorage.removeItem('favorites');
    };
 
  
    if (!favorites) return <div>Loading.....</div>;
  
    return (
      <div className="shop-cart">
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