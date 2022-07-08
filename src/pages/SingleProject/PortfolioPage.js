import React from 'react'
import HeroMockupPic from '../../images/Portfolio-mockup-min.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import carouselPic from '../../images/Carouselfeature.png'
import routerPic from '../../images/routerfeature.png'
import responsiveGif from '../../images/portResposiveVid.gif'
import wireframesPic from '../../images/portfolio-wireframes.JPG'
import { Link } from 'react-router-dom';


function PortfolioPage() {
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
    <div className='projects-wrapper'>
      <h1 className='projects-h1'>Portfolio</h1>
      <section className='projects-hero-sec'>
        <img className='hero-mockup-pic' src={HeroMockupPic} alt='High fidelity mockups of FilmfanDB homepage'></img>
        <div className='btn-div'>
        <a href='https://samiadli.com/filmfan-moviedb/' target='_blank'><button className='livesite-btn' >Live Site</button></a>
        <a href='https://github.com/1Sami1/filmfan-moviedb' target='_blank'><button className='github-btn'>Github</button></a>
        </div>
      </section>
      <section className='overview-section'>
        <h3 className='overview-h3'>Overview</h3>
        <p className='overview-p'>My personal portfolio, the site you're browsing right now! This site was built with React.js as a platform to showcase my work, design skills and my experience in web development. While it is mainly a static site I utilized React to add some dynamism.</p>
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
      <section className='features-section'>
        <h3 className='features-h3'>Features</h3>
        <Slider {...settings}>
        <img className='slider-port-pic' src={carouselPic}></img>
        <img className='slider-port-pic' src={routerPic}></img>
      </Slider>
      <h4 className='favesfeature-h4 carousel'>Carousel</h4>
      <p className='faves-feature-p'>The Carousel feature was implemented using a lightweight Javasrcipt library called Slick.  </p>
      <img></img>
      <h4 className='sortfeature-h4'>React Router</h4>
      <p className='sort-p'>The sorting feature text will all go here The favorites feature text will all go here The favorites feature text will all go here The favorites feature text will all go here The favorites feature text will all go here The favorites feature text will all go here v</p>
      <img></img>
      </section>
      <section className='design-section'>
        <h3 className='design-h3'>Design</h3>
        <Slider {...settings}>
        <img className='slider-port-pic' src={wireframesPic}></img>
        <img className='slider-port-pic' src={responsiveGif}></img>
      </Slider>
      <h4 className='design-mu-h4'>Wireframes</h4>
      <p className='design-mu-p'>Mockup text will go here. The favorites feature text will all go here The favorites feature text will all go here The favorites feature text will all go here</p>
      <h4 className='design-res-h4'>Responsiveness</h4>
      <p className='design-res-p'>Responsiveness text will go here The favorites feature text will all go here The favorites feature text will all go here The favorites feature text will all go here</p>
      </section>
      <Link to="/projects"><button className='projects-cta'>Back to projects</button></Link>

     


    </div>
  )
}

export default PortfolioPage