import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ShopCart.css'
import RemoveFromCart from '../../components/ShopComponents/Toast/RemoveFromCart/RemoveFromCart';



const ShopCart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [notificationType, setNotificationType] = useState(null);

  useEffect(() => {
    const savedShopCart = JSON.parse(localStorage.getItem('shopCart')) || [];
    setProducts(savedShopCart);
  }, []);

  const handleRemove = (id) => {
    const updatedShopCart = products.filter((product) => product.id !== id);
    setProducts(updatedShopCart);
    localStorage.setItem('shopCart', JSON.stringify(updatedShopCart));
    showNotification('removed');
  };

  const handleClear = () => {
    setProducts([]);
    localStorage.removeItem('shopCart');
  };

  const showNotification = (type) => {
    setNotificationType(type);
    setTimeout(() => {
      setNotificationType(null);
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <div className="shop-cart">
      {notificationType === 'removed' && (
        <RemoveFromCart message={
          <>
            Your product has been successfully removed from your cart ⛔
          </>
        } />
      )}
      {products.length === 0 ? (
        <div className="empty-message">Oh, your cart is empty.</div>
      ) : (
        <>
          <div className="button-wrapper">
            <button className="return-button" onClick={() => navigate(-1)}>Go Back</button>
            <button className="checkout-button">Proceed To Checkout</button>
            <button className="clear-button" onClick={handleClear}>Delete</button>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img className="product-image" src={product.image} alt={product.title} />
                <div className="product-info">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">{product.price}$</div>
                </div>
                <button className="remove-button" onClick={() => handleRemove(product.id)}>Delete</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

};

export default ShopCart;