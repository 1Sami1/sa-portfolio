import React from 'react'
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className='about-wrapper'>
      <h1 className='about-h1'>About</h1>
      <p className='about-para'>Hello! I'm Sami Adli and I'm a Front-End Developer that loves to create simple yet highly impactful and functional websites. Im commited to designing and developing beautiful websites that are created with all users in mind. Im very happy that this is an ever-evolving industry as I love to continue learning new things to help me on my coding journey. My favourite aspect in Web Development is styling, I love to play around with UI elements and experiment with colors and different layouts as well as express my creativity digitally.<br/> Outside of the Web Development world, I have a huge passion for cooking various types of cuisines! When Im not behind the computer, you can find me playing basketball, playing with my cat Bruno or having a snack and watching my favorite Tv-show The Office!</p>
      <h3 className='about-ed-h3'>Education</h3>


      <h3 className='about-tk-h3'>In My Toolkit</h3>
      <h4>Development</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>PHP</li>
        <li>Wordpress</li>
        <li>GitHub</li>
        <li>React</li>
        <li>jquery</li>
        <li>WooCommerce</li>
        <li>Shopify</li>
        <li>Bootstrap</li>
      </ul>
      <h4>Design</h4>
      <ul>
        <li>Adobe XD</li>
        <li>Figma</li>
        <li>InVision</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>UI Design</li>
      </ul>
      <Link to="/projects"><button>See My Work</button></Link>


    </div>
  )
}

export default AboutPage