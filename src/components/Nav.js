import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='site-nav'>
        <ul className='nav-ul'>
            <li><NavLink tabIndex={1} to="/about">About</NavLink></li>
            <li><NavLink tabIndex={2} to="/projects">Projects</NavLink></li>
            <li><NavLink tabIndex={3} to="/contact">Contacts</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav