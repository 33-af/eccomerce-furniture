import { Link } from "react-router-dom";
import { Logo, SearchIcon } from "../../../assets";
import './Header.css';
import {  useEffect, useState } from "react";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleSearch = (event) => {
    event.preventDefault();
    setSearchActive(!searchActive);
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
            <Link to="/" className="header__nav__link">Home</Link>
          </li>
          <li className="header__nav">
            <Link to="/shop" className="header__nav__link">Shop</Link>
          </li>
          <li className="header__nav">
            <Link to="/services" className="header__nav__link">Services</Link>
          </li>
          <li className="header__nav">
            <Link to="/project" data-goto=".gallery" className="header__nav__link">Project</Link>
          </li>
          <li className="header__nav">
            <Link to="/blog" className="header__nav__link">Blog</Link>
          </li>
          <li className="header__nav">
            <Link to="/contact" className="header__nav__link">Contact</Link>
          </li>
        </ul>
        <form className="searchForm flex">
          <label htmlFor="header__search" className="header__search__label">
            <button type="button" className="header__search__label_button" onClick={toggleSearch}>
              <img src={SearchIcon} alt="Search" />
            </button>
          </label>
          <input type="search" id="header__search" className={`header__search ${searchActive ? 'active' : ''}`} />
        </form>
      </div>
    </header>
  );
};

export default Header;