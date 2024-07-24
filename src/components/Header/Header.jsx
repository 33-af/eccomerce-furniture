import { Link } from "react-router-dom";
import { Logo, SearchIcon } from "../../assets";
import './Header.css';


const Header = () => {
    return (
      <header className="header">
        <div className="container flex">
          <div className="header__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="menuIcon">
            <span></span>
          </div>
          <ul className="header__navs flex">
            <li className="header__nav">
              <Link to="/" className="header__nav__link">
                Home
              </Link>
            </li>
            <li className="header__nav">
              <Link to="/shop" className="header__nav__link">
                Shop
              </Link>
            </li>
            <li className="header__nav">
              <Link to="/services" className="header__nav__link">
                Services
              </Link>
            </li>
            <li className="header__nav">
              <Link to="/project" data-goto=".gallery" className="header__nav__link">
                Project
              </Link>
            </li>
            <li className="header__nav">
              <Link to="/blog" className="header__nav__link">
                Blog
              </Link>
            </li>
            <li className="header__nav">
              <Link to="/contact" className="header__nav__link">
                Contact
              </Link>
            </li>
          </ul>
          <form action="" className="searchForm flex">
            <label htmlFor="header__search" className="header__search__label">
              <button type="button" className="header__search__label_button">
                <img src={SearchIcon} alt="Search" />
              </button>
            </label>
            <input type="search" id="header__search" className="header__search" />
          </form>
        </div>
      </header>
    );
  };
  
  export default Header;