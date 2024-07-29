import  { createContext, useState, useContext } from 'react';

// Create a Context for the search query
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook for using the SearchContext
export const useSearch = () => {
  return useContext(SearchContext);
};