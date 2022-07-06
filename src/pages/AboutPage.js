import React from 'react'
import { Link } from 'react-router-dom';
import Particles from '../components/Particles';

function AboutPage() {
  return (
    <div className='about-wrapper'>
      <h1 className='about-h1'>About</h1>
      <p className='about-para'>Hello! I'm Sami Adli and I'm a Front-End Developer that loves to create simple yet highly impactful and functional websites. Im commited to designing and developing beautiful websites that are created with all users in mind. Im very happy that this is an ever-evolving industry as I love to continue learning new things to help me on my coding journey. My favourite aspect in Web Development is styling, I love to play around with UI elements and experiment with colors and different layouts as well as express my creativity digitally.<br className='p-break'/> Outside of the Web Development world, I have a huge passion for cooking various types of cuisines! When Im not behind the computer, you can find me playing basketball, playing with my cat Bruno or having a snack and watching my favorite Tv-show The Office!</p>
      {/* <h3 className='about-ed-h3'>Education</h3> */}
      <h3 className='about-tk-h3'>In My Toolkit</h3>
      <div className='tk-wrapper'>
        <div className='dev'>
          <h4 className='tk-h4'>Development</h4>
              <ul className='tk-list'>
                <li className='tk-li'>HTML</li>
                <li className='tk-li'>CSS</li>
                <li className='tk-li'>Javascript</li>
                <li className='tk-li'>PHP</li>
                <li className='tk-li'>Wordpress</li>
                <li className='tk-li'>GitHub</li>
                <li className='tk-li'>React</li>
                <li className='tk-li'>jquery</li>
                <li className='tk-li'>WooCommerce</li>
                <li className='tk-li'>Shopify</li>
                <li className='tk-li'>Bootstrap</li>
              </ul>
        </div>
        
        <div className='design'>
          <h4 className='tk-h4'>Design</h4>
        <ul className='tk-list'>
          <li>Adobe XD</li>
          <li>Figma</li>
          <li>InVision</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>UI Design</li>
        </ul>
        </div>
        
      </div>
      <Link to="/projects"><button className='projects-cta'>See My Work</button></Link>

    <Particles />
    </div>
  )
}

export default AboutPage