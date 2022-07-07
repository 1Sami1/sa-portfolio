import React from 'react'
import HeroMockupPic from '../../images/Portfolio-mockup-min.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"


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
        <p className='overview-p'>Where im gonna write the overview for the project and the tech stack going to be under it</p>
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
        <div>Image 1</div>
        <div>Image 2</div>
        <div>Image 3</div>
      </Slider>
      <h4 className='favesfeature-h4'>Favourites Feature</h4>
      <p>The favorites feature text will all go here </p>
      <img></img>
      <h4 className='sortfeature-h4'>Sorting Feature</h4>
      <p>The sorting feature text will all go here </p>
      <img></img>
      </section>
      <section className='design-section'>
        <h3 className='design-h3'>Design</h3>
        <Slider {...settings}>
        <div>Image 1</div>
        <div>Image 2</div>
        <div>Image 3</div>
      </Slider>
      <h4>Mock Ups</h4>
      <p>Mockup text will go here.</p>
      <h4>Responsiveness</h4>
      <p>Responsiveness text will go here</p>
      <img></img>
      </section>
     


    </div>
  )
}

export default PortfolioPage