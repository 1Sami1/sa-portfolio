import React from 'react'
import previewPic from '../images/flimfanSS.png'

function ProjectCard() {
  return (
    <div className='card-wrapper'>
        <img src={previewPic} alt="" className='card-preview-pic' />
        <div className='card-info'>
            <h3>FilmFanDB</h3>
            <p>React | Sass | Javascript</p>
            <p>A movie database website designed 
               to provide users with the latest movie 
               information.</p>

        </div>
        <button>See Project</button>

    </div>
  )
}

export default ProjectCard