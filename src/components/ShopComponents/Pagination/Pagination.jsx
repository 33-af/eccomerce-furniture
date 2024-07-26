import { useState } from 'react';
import './Pagination.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Pagination = () => {
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
   
    return (
        <div className="projectPagination flex">
            <button  className="projectPagButton">
                <MdKeyboardDoubleArrowLeft  className='arrow___left'/>
            </button>

            <button
                className={`projectPagButton ${activePage === 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(1)}
            >
                01
            </button>
            <button
                className={`projectPagButton ${activePage === 2 ? 'active' : ''}`}
                onClick={() => handlePageChange(2)}
            >
                02
            </button>
            <button
                className={`projectPagButton ${activePage === 3 ? 'active' : ''}`}
                onClick={() => handlePageChange(3)}
            >
                03
            </button>
            <button className="projectPagButton">
                <MdOutlineKeyboardDoubleArrowRight className='arrow___right' />
            </button>
        </div>
    );
};

export default Pagination;