import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../images/Logo.svg'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => { 

    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <Link className="navbar-brand" to="/">
        <img src={Logo} 
        alt="logo-LittleLemon" />
      </Link>

      {/* mobile nav */}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/">Home</Link> 
        </li>
        {/* <li>
          <Link to="/about">About</Link> 
        </li> */}
        <li>
          <Link  to="/menu">Menu</Link>
        </li>
        <li   >
          <Link  to="/reservations">Online Booking</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;