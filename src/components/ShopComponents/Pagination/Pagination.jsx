
import './Pagination.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="projectPagination flex">
        <button
          className="projectPagButton"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdKeyboardDoubleArrowLeft className='arrow___left' />
        </button>
  
        {pageNumbers.map(number => (
          <button
            key={number}
            className={`projectPagButton ${currentPage === number ? 'active' : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number.toString().padStart(2, '0')}
          </button>
        ))}
  
        <button
          className="projectPagButton"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          <MdOutlineKeyboardDoubleArrowRight className='arrow___right' />
        </button>
      </div>
    );
  };
  
  export default Pagination;