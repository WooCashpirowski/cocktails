import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={Logo} alt="cocktailDB logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
