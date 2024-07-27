// src/Navbar.js
import React, { useState } from 'react';
import '../../public/css/Navbar.css';
import Logo from "../../public/image/Logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo"><img src={Logo} alt="" /></div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="../main.jsx/">Contact</a>
      </div>
      <div className="nav-toggle" onClick={toggleNavbar}>
        ☰
      </div>
    </nav>
  );
};
export default Navbar;
