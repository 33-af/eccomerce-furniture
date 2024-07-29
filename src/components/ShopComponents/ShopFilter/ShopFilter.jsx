import { useState } from 'react';
import './ShopFilter.css'


//приходит функция обратного вызова и вызывается когда пользователь меняет фильтр
const ShopFilter = ({ onFilterChange }) => {


  //хранит текущий выбраный по дефолту все
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
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