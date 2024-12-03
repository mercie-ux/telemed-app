import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

const NavBar = () => (
  <nav>
    <div className='navbar-logo'>
        <Link to="/">
        <img src={Logo} alt='Logo' className='logo-image' />
        </Link>
      
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/providers">Providers</Link></li>
      <li><Link to="/patients">Patients</Link></li>
      <li><Link to="/appointment">Appointments</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/payment">Payment</Link></li>
    </ul>
  </nav>
);

export default NavBar;