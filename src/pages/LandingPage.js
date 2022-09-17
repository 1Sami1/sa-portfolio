import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import 'animate.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';



function LandingPage() {

  return (
    <div className='lp-wrapper'>
      
      <section className='hero-sec'>
        <div className='top-bar'></div>
        <h1 className='hero-text'>Creative Developer</h1>
        <div className='bottom-bar'></div>
      </section>
      <AnimationOnScroll animateIn='animate__bounceInLeft'>
        <section className='about-sec'>
          <h2 className='about-sec-h2'>About</h2>
          <p className='about-sec-p'>I'm Sami! I am a Front-End Developer based in Vancouver, BC.<br/> I take pride in creating excellent designs! </p>
          <Link to="/about"><button className='about-cta' to='/about' >More about me</button></Link>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__bounceInRight'>
        <section className='work-sec'>
          <h2 className='work-sec-h2'>Featured Work</h2>
          <Carousel />
        </section>
      </AnimationOnScroll>
    </div>
  )
}

export default LandingPage