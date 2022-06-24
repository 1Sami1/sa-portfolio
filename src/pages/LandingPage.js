import React from 'react';
import Particles from '../components/Particles';
import {FaArrowDown} from 'react-icons/fa'


function LandingPage() {
  return (
    <div className='lp-wrapper'>
      <section className='hero-sec'>
        <div className='top-bar'></div>
        <h1 className='hero-text'>Creative Developer</h1>
        <div className='bottom-bar'></div>
      </section>
      <a className='scroll-btn' href="/"><FaArrowDown className='scroll-arrow' /></a>
      <section className='about-sec'>
        <h1>Next Section</h1>
      </section>
      <Particles />
    </div>
  )
}

export default LandingPage