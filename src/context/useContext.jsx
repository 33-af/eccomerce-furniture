import  { createContext, useState, useContext } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some(cartItem => cartItem.id === item.id);
      if (!itemExists && prevItems.length < 5) {
        return [...prevItems, item];
      } else {
        return prevItems;
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the CartContext
export const useCart = () => {
  return useContext(CartContext);
};