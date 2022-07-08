import React from 'react'
import HeroMockupPic from '../../images/Filmfan-mockup-min.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import favesFeatureGif from '../../images/FFfavesGIF.gif'
import sortFeatureGif from '../../images/FFsortGIF.gif'
import muDesktopPic from '../../images/mu-desktop-pic.JPG'
import muMobilePic from '../../images/mu-mobile-pic.JPG'
import responsiveGif from '../../images/FFresponsiveGIF.gif'
import { Link } from 'react-router-dom';


function FilmfanPage() {
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
      <h1 className='projects-h1'>FilmfanDB</h1>
      <section className='projects-hero-sec'>
        <img className='hero-mockup-pic' src={HeroMockupPic} alt='High fidelity mockups of FilmfanDB homepage'></img>
        <div className='btn-div'>
        <a href='https://samiadli.com/filmfan-moviedb/' target='_blank'><button className='livesite-btn'>Live Site</button></a>
        <a href='https://github.com/1Sami1/filmfan-moviedb' target='_blank'><button className='github-btn'>Github</button></a>
        </div>
      </section>
      <section className='overview-section'>
        <h3 className='overview-h3'>Overview</h3>
        <p className='overview-p'>FilmFanDB is a movie database web app that allows users to find information about various movies, sort through different categories on the homepage and add movies to their favorites page! It is built with React.js and it collects real time data through The Movie Databse API.  </p>
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
        {/* <Slider {...settings}>
        <img className='slider-feature-img' src={favesFeatureGif}></img>
        <div>Image 2</div>
        <div>Image 3</div>
      </Slider> */}
      <h4 className='favesfeature-h4'>Favourites Feature</h4>
      <p className='faves-feature-p'>The favorites feature was created for users to save their favorite movies without the need for an account. Local storage is used to save the movies dynamically and display them on the favorites page. Users are also able to unfavorite any movie they no longer want. </p>
      <img className='slider-feature-img' src={favesFeatureGif}></img>
      <h4 className='sortfeature-h4'>Sorting Feature</h4>
      <p className='sort-p'>This feature allows user to toggle between Top rated, Popular, Upcoming and Now playing. It required the manipulation of the API url in order to target the specific data from the database and display the movies related to the different filters.   </p>
      <img className='slider-feature-img' src={sortFeatureGif}></img>
      </section>
      <section className='design-section'>
        <h3 className='design-h3'>Design</h3>
        <Slider {...settings}>
        <img className='slider-design-pic' src={muDesktopPic}></img>
        <img className='slider-design-pic' src={muMobilePic}></img>
        <img className='slider-design-pic' src={responsiveGif}></img>
      </Slider>
      <h4 className='design-mu-h4'>Mock Ups</h4>
      <p className='design-mu-p'>High fidelity mockups were made with Adobe XD using a mobile-first approach. The website design is clean and simple with minimal elements, it focuses on the main content while giving elements plenty of breathing room. The colors are light and give off a fun and playful vibe.</p>
      <h4 className='design-res-h4'>Responsiveness</h4>
      <p className='design-res-p'>Responsive design is a key aspect in web Development. FilmFanDB was coded and styled mobile-first and works on all screen sizes. With the use of multiple media queries the website has no breakpoints on any screen size between 320px and 1920px.</p>
      </section>
      <Link to="/projects"><button className='projects-cta'>Back to projects</button></Link>
    </div>
  )
}

export default FilmfanPage