import React from 'react'
import previewPic from '../images/PassGen-MuV2.svg'
import { Link } from 'react-router-dom';


function PassGenCard() {
  return (

    <div className='card-wrapper'>

      <div className='card-img'>
        <img src={previewPic} alt="" className='card-preview-pic' />
      </div>

      <div className='card-info'>
          <h3 className='card-proj-title'>Password Generator</h3>
          <p className='card-proj-tags'>React | Sass | Javascript</p>
          <p className='card-proj-p'>App that generates strong and secure passwords.</p>

             <Link to='/password-generator'><button className='card-btn'>See Project</button></Link>
      </div>

    </div>
  )
}

export default PassGenCard