import React from 'react';
import Particles from '../components/Particles';


function LandingPage() {
  return (
    <div className='lp-wrapper'>
      <div className='hero-sec'>
        <div className='top-bar'></div>
        <h1 className='hero-text'>Creative Developer</h1>
        <div className='bottom-bar'></div>
        <Particles />
      </div>
    </div>
  )
}

export default LandingPage