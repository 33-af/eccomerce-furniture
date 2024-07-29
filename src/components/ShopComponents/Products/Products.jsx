import './Products.css'
import ShopFilter from '../ShopFilter/ShopFilter';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import * as Images from '../../../assets/index'; 
import ProductsCard from '../ProductCard/ProductsCard';
import { useSearch } from '../../../context/searchContext';


//вся страницы
//на которой вставляем отобрнажение каждой карточки тем самым давая стили и фильтр
const Products = () => {
  const { searchQuery } = useSearch();
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    // Fetch products from API
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

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, [searchQuery, selectedFilter]); // Trigger on searchQuery or selectedFilter change

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset to the first page on filter change
  };

  // Filter products based on search query and selected filter
  const filteredProjects = products
    .filter(product => {
      const matchesCategory = selectedFilter === 'All' || product.category === selectedFilter;
      const matchesSearch = searchQuery === '' || product.title.toLowerCase().includes(searchQuery) ||
                            product.category.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

  // Determine whether to apply pagination
  const shouldPaginate = searchQuery === '';

  // Calculate pagination if needed
  const indexOfLastItem = shouldPaginate ? currentPage * ITEMS_PER_PAGE : filteredProjects.length;
  const indexOfFirstItem = shouldPaginate ? indexOfLastItem - ITEMS_PER_PAGE : 0;
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
              image={Images[project.image] || null}
              title={project.title}
              description={project.description}
              category={project.category}
              price={project.price}
            />
          ))}
        </div>
        {shouldPaginate && (
          <Pagination
            currentPage={currentPage}
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={filteredProjects.length}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default Products;