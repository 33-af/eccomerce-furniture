import './Products.css'
import ShopFilter from '../ShopFilter/ShopFilter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import * as Images from '../../../assets/index'; 
import ProductsCard from '../ProductCard/ProductsCard';


//вся страницы
//на которой вставляем отобрнажение каждой карточки тем самым давая стили и фильтр

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  const getImage = (imageName) => {
    return Images[imageName] || null;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3026/projects');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredProjects = selectedFilter === 'All'
    ? products
    : products.filter(project => project.category === selectedFilter);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="projects">
      <div className="container">
        <ShopFilter onFilterChange={handleFilterChange} />
        <div className="projects__cards">
          {currentItems.map((project) => (
            <ProductsCard
              key={project.id}
              id={project.id}
              image={getImage(project.image)}
              title={project.title}
              description={project.description}
              category={project.category}
              price={project.price}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={filteredProjects.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Products;