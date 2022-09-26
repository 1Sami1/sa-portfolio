import React from 'react'
import ProjectCard from '../components/FilmfanCard'
import PortfolioCard from '../components/PortfolioCard'
import CapstoneCard from '../components/CapstoneCard'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import react, { useState, useEffect } from 'react';
import Loader from '../components/Loader';


function ProjectsPage() {

  // Loading animation
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
      
      <h1 className='projects-h1'>Projects</h1>

      <section className='projects-sec'>

        <ProjectCard />

        <AnimationOnScroll animateIn='animate__bounceInUp' initiallyVisible='true' animateOnce='true'>
          <PortfolioCard />
        </AnimationOnScroll>
        
        <AnimationOnScroll animateIn='animate__bounceInUp' animateOnce='true'>
        <CapstoneCard />
        </AnimationOnScroll>

      </section>
      
    </div>
    
    )}

    </>
  )
}

export default ProjectsPage