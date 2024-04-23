import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import FooterContext from "./FooterContext";

const NavBar = () => {
  const footerRef = useContext(FooterContext);

  const scrollToFooter = () => {
      footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
 };

  return (
    <header className="header">
      <div className="amatic-sc-regular">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo" style={{color: 'orange'}}>
          Homeless Hearts
        </NavLink>

        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Blog" className="nav__link" onClick={toggleMenu}>
                Blog
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Donate" className="nav__link" onClick={toggleMenu}>
                Donate
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Adopt" className="nav__link" onClick={toggleMenu}>
                Adopt
              </NavLink>
            </li>
            <li className="nav__item">
              <a href="#footer" className="nav__link" onClick={scrollToFooter}>
                Contact Us
              </a>
            </li>

            <li className="nav__item">
              <NavLink to="/GetStarted" className="nav__cta" onClick={toggleMenu}>
                Become A Volunteer
              </NavLink>
            </li>
          </ul>
        </div>
      </nav></div>
    </header>
  );
};

export default NavBar;
