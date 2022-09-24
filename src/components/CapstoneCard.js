import React from 'react'
import previewPic from '../images/Dukes-MUv2.svg'
import { Link } from 'react-router-dom';

function CapstoneCard() {
  return (
    <div className='card-wrapper'>
      <div className='card-img'>
        <img src={previewPic} alt="" className='card-preview-pic' />
      </div>
      <div className='card-info'>
          <h3 className='card-proj-dukes'>Duke's Steakhouse</h3>
          <p className='card-proj-tags-dukes'>Wordpress | Sass | PHP</p>
          <p className='card-proj-p-dukes'>A headless CMS website designed with a custom WordPress theme. </p>
          <Link to='/Capstone'><button className='card-btn'>See Project</button></Link>
      </div>
      

    </div>
  )
}

export default CapstoneCard