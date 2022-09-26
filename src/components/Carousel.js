import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectCard from './FilmfanCard';
import PortfolioCard from '../components/PortfolioCard'
import CapstoneCard from '../components/CapstoneCard'

function Carousel() {

  // Carousel configuration Settings
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
    
    // Carousel wrapper with content inside
      <Slider {...settings}>
        <ProjectCard />
        <PortfolioCard />
        <CapstoneCard />
      </Slider>
   
  )
}

export default Carousel