import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectCard from './ProjectCard';

function Carousel() {
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
    
      <Slider {...settings}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        

      </Slider>
   
  )
}

export default Carousel