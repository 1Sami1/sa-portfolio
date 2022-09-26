import React from 'react'
import {Link} from 'react-router-dom';

function Page404() {

  return (
    <div className='wrapper-404'>

      <h2 className='h2-404' >You found the 404 page!</h2>

      <h3 className='h3-404'>I couldn't find what you were looking for!</h3>
      
      <Link to="/"><button className='bth-btn'>Back To Home</button></Link>
      
    </div>
  )
}

export default Page404 