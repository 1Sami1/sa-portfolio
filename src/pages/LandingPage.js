import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import 'animate.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import react, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Bounce from 'react-reveal/Bounce';



function LandingPage() {

  // loading animation
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);


  return (

    <div className='lp-wrapper'>

      {loading ? (
        <Loader /> ) : (
      <>

      <section className='hero-sec'>
        <div className='top-bar'></div>
        <h1 className='hero-text'>Creative Developer</h1>
        <div className='bottom-bar'></div>
      </section>

      <Bounce left>
        <section className='about-sec'>
          <h2 className='about-sec-h2'>About</h2>
          <p className='about-sec-p'>I'm Sami! I am a Front-End Developer based in Vancouver, BC.<br/> I take pride in creating excellent designs! </p>
          <Link to="/about"><button className='about-cta' to='/about' >More about me</button></Link>
        </section>
      </Bounce>
    
      <Bounce right>
        <section className='work-sec'>
          <h2 className='work-sec-h2'>Featured Work</h2>
          <Carousel />
        </section>
      </Bounce>

      </>
       )}

    </div>
    
  )
}

export default LandingPage