import React from 'react'
import ProjectCard from '../components/FilmfanCard'
import PortfolioCard from '../components/PortfolioCard'
import CapstoneCard from '../components/CapstoneCard'
import { AnimationOnScroll } from 'react-animation-on-scroll'


function ProjectsPage() {
  return (
    <div className='projects-wrapper'>

      <h1 className='projects-h1'>Projects</h1>

      <section className='projects-sec'>
        <ProjectCard />
        <PortfolioCard />
        <AnimationOnScroll animateIn='animate__bounceInUp'>
        <CapstoneCard />
        </AnimationOnScroll>
      </section>

    </div>
  )
}

export default ProjectsPage