import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MobileNav() {
  return (
    <nav className='mobile-nav'>
      <ul className='mobile-nav-ul'>
            <li><NavLink tabIndex={1} to="/">Home</NavLink></li>
            <li><NavLink tabIndex={2} to="/about">About</NavLink></li>
            <li><NavLink tabIndex={3} to="/projects">Projects</NavLink></li>
            <li><NavLink tabIndex={4} to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default MobileNav