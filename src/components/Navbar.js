import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link
          to="/"
          className={click ? "logo hidden" : "logo"}
          onClick={closeMobileMenu}
        >
          Javier Olivares
        </Link>

        <ul className={click ? "navbar__menu active" : "navbar__menu"}>
          <li className="navbar__item">
            <NavLink
              to="#work"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Work
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="#about"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="#blog"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Blog
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="#contact"
              className="navbar__link__button"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="menu__toggle" onClick={handleClick}>
          {click ? <IoClose className="menu__icon" /> : <IoMenu className="menu__icon" />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar