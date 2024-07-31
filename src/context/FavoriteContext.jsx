import {createContext, useContext, useState, useEffect} from "react";

const FavoriteContext = createContext();


export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(savedFavorites);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
  
    const addToFavorites = (item) => {
      setFavorites((prevItems) => {
        const itemExists = prevItems.some(favoriteItem => favoriteItem.id === item.id);
        if (!itemExists) {
          return [...prevItems, item];
        } else {
          return prevItems;
        }
      });
    };
  
    const removeFromFavorites = (id) => {
      setFavorites((prevItems) => prevItems.filter(item => item.id !== id));
    };
  
    const clearFavorites = () => {
      setFavorites([]);
    };
  
    return (
      <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites, setFavorites }}>
        {children}
      </FavoriteContext.Provider>
    );
  };
  
  export const useFavorites = () => {
    return useContext(FavoriteContext);
  } 