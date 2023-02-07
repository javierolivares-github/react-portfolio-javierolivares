import React, { useState } from 'react';
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav id="navbar" className="navbar">
      <div className="navbar__container">
        <a
          href="#hero"
          className={click ? "logo hidden" : "logo"}
          onClick={closeMobileMenu}
        >
          Javier Olivares
        </a>

        <ul className={click ? "navbar__menu active" : "navbar__menu"}>
          <li className="navbar__item">
            <a
              href="#works"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Works
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#hero"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              About
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#hero"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Blog
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="#contact"
              className="navbar__link__button"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
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