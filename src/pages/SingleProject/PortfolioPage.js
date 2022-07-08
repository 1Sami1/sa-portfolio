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
      <p className='faves-feature-p'>The Carousel feature was implemented using a lightweight Javasrcipt library called Slick. A simple npm download provided me with the react component as well as its styling which allowed me to customize the carousel to my liking with ease.   </p>
      <img></img>
      <h4 className='sortfeature-h4'>React Router</h4>
      <p className='sort-p'>React Router is another lightweight Javascript library that allowed for super easy routing to all the different pages. React router has great documentation which allowed me to very easily understand how browser routing worked and implement it in my portfolio.</p>
      <img></img>
      </section>
      <section className='design-section'>
        <h3 className='design-h3'>Design</h3>
        <Slider {...settings}>
        <img className='slider-port-pic' src={wireframesPic}></img>
        <img className='slider-port-pic' src={responsiveGif}></img>
      </Slider>
      <h4 className='design-mu-h4'>Wireframes</h4>
      <p className='design-mu-p'>I started this project by designing some wireframes to have a base model of what my portfolio would like in terms of layout and content organization. I designed the wireframes using a mobile-first approach as responsiveness is a key aspect to have on a project. While my end project does not look much like the wireframes, they helped tremendously to reach the goal. </p>
      <h4 className='design-res-h4'>Responsiveness</h4>
      <p className='design-res-p'>Responsive design is a key aspect in web Development. My portfolio was coded and styled mobile-first and works on all screen sizes. With the use of multiple media queries the website has no breakpoints on any screen size between 320px and 1920px.</p>
      </section>
      <Link to="/projects"><button className='projects-cta'>Back to projects</button></Link>

     


    </div>
  )
}

export default PortfolioPage