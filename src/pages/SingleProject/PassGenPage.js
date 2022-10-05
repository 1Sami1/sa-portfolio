import React from 'react'
import HeroMockupPic from '../../images/PassGen-MuV2.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll'
import react, { useState, useEffect } from 'react'
import Loader from '../../components/Loader'


function PassGenPage() {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipe: true,
    draggable: true,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    {loading ? (
        <Loader /> ) : (

    <div className='projects-wrapper'>

      <h1 className='projects-h1'>Password Generator</h1>

      <section className='projects-hero-sec'>
        <img className='hero-mockup-pic' src={HeroMockupPic} alt='High fidelity mockups of FilmfanDB homepage'></img>
        <div className='btn-div'>
        <a href='https://samiadli.com/password-generator/index.html' target='_blank'><button className='livesite-btn'>Live Site</button></a>
        <a href='https://github.com/1Sami1/pass-generator' target='_blank'><button className='github-btn'>Github</button></a>
        </div>
      </section>

      <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
      <section className='overview-section'>
        <h3 className='overview-h3'>Overview</h3>
        <p className='overview-p'>  </p>
        <h4 className='devstack-h4'>Development Stack</h4>
        <ul className='devstack-ul'>
          <li>Javasrcipt/React</li>
          <li>CSS/SASS</li>
          <li>HTML5</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>GitHub</li>
        </ul>
      </section>
      </AnimationOnScroll>


      <Link to="/projects"><button className='projects-cta'>Back to projects</button></Link>
      
    </div>
        )}
    </>
  )
}

export default PassGenPage