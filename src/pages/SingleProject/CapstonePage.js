import React from 'react'
import HeroMockupPic from '../../images/Dukes-MUv2.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import react, { useState, useEffect } from 'react'
import Loader from '../../components/Loader'
import acfFeature from '../../images/CP-ACF-min.JPG'
import customLogin from '../../images/customLogin-min.JPG'
import { Link } from 'react-router-dom';


function CapstonePage() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  return (
    <>
    {loading ? (
        <Loader /> ) : (
    <div className='projects-wrapper'>
      <h1 className='projects-h1'>Duke's Steakhouse</h1>

      <section className='projects-hero-sec'>
        <img className='hero-mockup-pic' src={HeroMockupPic} alt='High fidelity mockups of FilmfanDB homepage'></img>
        <div className='btn-div'>
        <a href='https://restaurant.bcitwebdeveloper.ca' target='_blank'><button className='livesite-btn'>Live Site</button></a>
        <a href='https://github.com/1Sami1' target='_blank'><button className='github-btn'>Github</button></a>
        </div>
      </section>

        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
      <section className='overview-section'>
        <h3 className='overview-h3'>Overview</h3>
        <p className='overview-p'>As a collaborative team project, we decided to design and code a Wordpress website for a fictional restaurant Duke's Steakhouse. We went with a sleek and high-end look and feel to project the cuisine and atmosphere we desired for our restaurant.   </p>
        <h4 className='devstack-h4'>Development Stack</h4>
        <ul className='devstack-ul'>
          <li>WordPress</li>
          <li>CSS/SASS</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>ACF</li>
          <li>GitHub</li>
        </ul>
      </section>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
      <section className='features-section'>
        <h3 className='features-h3'>Features</h3>
        <h4 className='favesfeature-h4'>Advanced Custom Fields</h4>
        <p className='faves-feature-p'>The Advanced Custom Fields allowed us to create fields to output the content of the site on all the pages in an organized manner. The fields were categorized by page and each field had a specific ID which helped in styling later on.  </p>
        <img className='slider-feature-img' src={acfFeature}></img>
        <h4 className='favesfeature-h4'>Custom WordPress Login Page</h4>
        <p className='faves-feature-p'>Using the LoginPress plugin we were able to use to WordPress customizer to design our own login page instead of opting for the default WordPress login page. It allowed us with complete freedom and manipulation of the page with multiple options to add on like a reCAPTCHA and welcome messages. </p>
        <img className='slider-feature-img' src={customLogin}></img>
      </section>
      </AnimationOnScroll>

      <Link to="/projects"><button className='projects-cta'>Back to projects</button></Link>
      




    </div>
    )}
    </>
  )
}

export default CapstonePage