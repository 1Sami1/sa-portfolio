import React from 'react'
import ProjectCard from '../components/ProjectCard'

function ProjectsPage() {
  return (
    <div className='projects-wrapper'>
      <h1 className='projects-h1'>Projects</h1>
      <section className='projects-sec'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        

      </section>


    </div>
  )
}

export default ProjectsPage