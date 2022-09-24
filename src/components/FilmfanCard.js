import React from 'react'
import previewPic from '../images/FFDB-finalMuV2.svg'
import { Link } from 'react-router-dom';


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
             <Link to='/FilmfanDB'><button className='card-btn'>See Project</button></Link>
      </div>
      

    </div>
  )
}

export default ProjectCard