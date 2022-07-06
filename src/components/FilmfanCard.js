import React from 'react'
import previewPic from '../images/flimfanSS.png'

function ProjectCard() {
  return (
    <div className='card-wrapper'>
      <div className='card-img'>
        <img src={previewPic} alt="" className='card-preview-pic' />
      </div>
      <div className='card-info'>
          <h3 className='card-proj-title'>FilmFanDB</h3>
          <p className='card-proj-tags'>React | Sass | Javascript</p>
          <p className='card-proj-p'>A movie database website designed 
             to provide users with the latest movie 
             information.</p>
          <button className='card-btn'>See Project</button>
      </div>
      

    </div>
  )
}

export default ProjectCard