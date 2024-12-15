import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';


const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='navbar'>
    <div className='navbar-logo'>
        <Link to="/">
        <img src={Logo} alt='Logo' className='logo-image' />
        </Link>
      
    </div>
    <div className={`menu ${isNavOpen ? 'open' : ''}`}>
    <ul>
      <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
      <li><Link to="/providers" onClick={() => setIsNavOpen(false)}>Providers</Link></li>
      <li><Link to="/patients" onClick={() => setIsNavOpen(false)}>Patients</Link></li>
      <li><Link to="/appointment" onClick={() => setIsNavOpen(false)}>Appointments</Link></li>
      <li><Link to="/login" onClick={() => setIsNavOpen(false)}>Login</Link></li>
      <li><Link to="/payment" onClick={() => setIsNavOpen(false)}>Payment</Link></li>
    </ul>
    </div>
    <div 
      className='toggle-button' 
      onClick={toggleNav}
      aria-label='Toggle navigation menu'
      aria-expanded={isNavOpen}
      >
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </div>
  </nav>
  );
};

export default NavBar;