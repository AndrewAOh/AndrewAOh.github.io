// IMPORT STATEMENTS
// import * as React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './Header.css';
import logo from "../Pictures//Logos/AOh.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [color, changeColor] = useState("#ffffff");
  document.body.style.backgroundColor = color;

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={() => changeColor("#333333")}><img src={logo} alt=""></img></Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="close-icon">
              <span className="line1"></span>
              <span className="line2"></span>
            </div>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/about" activeClassName="active" onClick={() => changeColor("#ffffff")}>About</NavLink>
          <NavLink to="/projects" activeClassName="active" onClick={() => changeColor("#ffffff")}>Projects</NavLink>
          <NavLink to="/experiences" activeClassName="active" onClick={() => changeColor("#ffffff")}>Experiences</NavLink>
        </nav>
      </div>
      {/* <div className="divider"></div> */}
    </header>
  );
}
  
export default Header;