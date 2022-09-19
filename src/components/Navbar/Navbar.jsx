import React from 'react';
import './Navbar.css';
import images from '../../constants/images'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
const Navbar = () => {

  return(

  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
    <img src={images.logo} alt="app logo" />
      </div>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Login / Register</a>
      <div />
          </div>
    
   
    </nav>
  );
};

export default Navbar;
