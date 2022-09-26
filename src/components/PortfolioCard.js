import React from 'react'
import previewPic from '../images/PortFolio-MUv2.svg'
import { Link } from 'react-router-dom';

function PortfolioCard() {
  return (
    <div className='card-wrapper'>

      <div className='card-img'>
        <img src={previewPic} alt="" className='card-preview-pic' />
      </div>

      <div className='card-info'>
          <h3 className='card-proj-title'>Portfolio</h3>
          <p className='card-proj-tags'>React | Sass | Gulp</p>
          <p className='card-proj-p'>My personal portfolio developed with react and styled with Sass Modules.</p>
          <Link to='/Portfolio'><button className='card-btn'>See Project</button></Link>
      </div>

    </div>
  )
}

export default PortfolioCard