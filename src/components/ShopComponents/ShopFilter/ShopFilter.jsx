import { useState } from 'react';
import './ShopFilter.css'

const ShopFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
      alert('good')
    }
  };

  return (
    <div className="projects__filter flex">
      {['All', 'Bathroom', 'Bedroom', 'Kitchen', 'Living Area'].map((filter) => (
        <button
          key={filter}
          className={`filter__button ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ShopFilter;