import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterNav() {

  const bottomNavItems =[
    {title: 'Home',},
    {title: 'About'},
    {title: 'Projects'},
    {title: 'contact'}

  ]
  return (
    <footer className='site-footer'>
        <nav className='bottom-nav'>
          <div className='bottom-nav-item'><NavLink className='bottom-nav-title' tabIndex={1} to="/">Home</NavLink></div>
          <div className='bottom-nav-item'><NavLink className='bottom-nav-title' tabIndex={2} to="/about">About</NavLink></div>
          <div className='bottom-nav-item'><NavLink className='bottom-nav-title' tabIndex={3} to="/projects">Projects</NavLink></div>
          <div className='bottom-nav-item'><NavLink className='bottom-nav-title' tabIndex={4} to="/contact">Contact</NavLink></div>
        </nav>
    </footer>
  )
}

export default FooterNav