import React from 'react';
import { useState } from 'react';

import './Navbar2.css';
import images from '../../constants/images'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GiSpiralLollipop} from 'react-icons/gi'


const Navbar2 = () => {

  const [toggleMenu , setToggleMenu] = useState(false);
  return(

  <nav className='app__navbar2'>
    <ul className='app__navbar-links'>
      <li className='p__opensans'> <a href="#home">Home</a> </li>
      <li className='p__opensans'> <a href="#about">About</a> </li>
      <li className='p__opensans'> <a href="#categories">Categories</a> </li>
      <li className='p__opensans'> <a href="#contact">Contact</a> </li>
    </ul>
    <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='hammenu' color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiSpiralLollipop fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Categories</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
