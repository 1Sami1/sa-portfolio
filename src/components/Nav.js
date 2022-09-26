import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/Logo-v4.png'

function Nav() {
  return (
    
    <nav className='site-nav'>
        <ul className='nav-ul'>
            <li><NavLink tabIndex={1} to="/">Home</NavLink></li>
            <li><NavLink tabIndex={2} to="/about">About</NavLink></li>
            <li><Link to="/"><img className='site-logo' src={logo} /></Link></li>
            <li><NavLink tabIndex={3} to="/projects">Projects</NavLink></li>
            <li><NavLink tabIndex={4} to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav