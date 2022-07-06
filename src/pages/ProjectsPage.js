import React from 'react'
import ProjectCard from '../components/FilmfanCard'
import PortfolioCard from '../components/PortfolioCard'
import CapstoneCard from '../components/CapstoneCard'

function ProjectsPage() {
  return (
    <div className='projects-wrapper'>
      <h1 className='projects-h1'>Projects</h1>
      <section className='projects-sec'>
        <ProjectCard />
        <PortfolioCard />
        <CapstoneCard />
        

      </section>


    </div>
  )
}

export default ProjectsPage