import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">SP</div>

      <div className={`navbar-links ${open ? "active" : ""}`}>
      <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      <Link to="/publications" onClick={() => setOpen(false)}>Publications</Link>
      <Link to="/resume" onClick={() => setOpen(false)}>Resume</Link>
      {/* <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link> */}
    </div>


      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
