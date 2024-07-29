import { NavLink,  useNavigate } from "react-router-dom";
import { Logo, SearchIcon } from "../../../assets";
import './Header.css';
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSearch } from "../../../context/searchContext";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();


  const toggleSearch = (event) => {
    event.preventDefault();
    setSearchActive(!searchActive);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query); // Update the query in context

    // Redirect to the products page if searchQuery is not empty
    if (query.trim() !== '') {
      navigate('/shop'); // Redirect to products page
    }
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle('lock', !menuActive);
  };

 

  useEffect(() => {
    const menuLinks = document.querySelectorAll('.header__nav__link[data-goto]');

    const onMenuLinkClick = (e) => {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
        if (menuActive) {
          setMenuActive(false);
          document.body.classList.remove('lock');
        }
        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        });
        e.preventDefault();
      }
    };

    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });

    return () => {
      menuLinks.forEach((menuLink) => {
        menuLink.removeEventListener('click', onMenuLinkClick);
      });
    };
  }, [menuActive]);

  return (
    <header className="header">
      <div className="container flex">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className={`menuIcon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
        </div>
        <ul className={`header__navs flex ${menuActive ? 'active' : ''}`}>
          <li className="header__nav">
            <NavLink to="/" className="header__nav__link" activeClassName="active">Home</NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/shop" className="header__nav__link" activeClassName="active">Most Sailed</NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/services" className="header__nav__link" activeClassName="active">Services</NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/blog" className="header__nav__link" activeClassName="active">Blog</NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/login" className="header__nav__link" activeClassName="active">Log In</NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/contact" className="header__nav__link" activeClassName="active">Contact</NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/favoriteCart" className="header__nav__link" activeClassName="active"><FaRegHeart /></NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/shopCart" className="header__nav__link" activeClassName="active"><FaCartArrowDown /></NavLink>
          </li>
          <li className="header__nav">
            <NavLink to="/profile" className="header__nav__link" activeClassName="active">Profile</NavLink>
          </li>
        </ul>
        <form className="searchForm flex">
          <label htmlFor="header__search" className="header__search__label">
            <button type="button" className="header__search__label_button" onClick={toggleSearch}>
              <img src={SearchIcon} alt="Search" />
            </button>
          </label>
          <input
            type="search"
            id="header__search"
            className={`header__search ${searchActive ? 'active' : ''}`}
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by title or category"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;