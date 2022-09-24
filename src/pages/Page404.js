import React from 'react'
import {Link} from 'react-router-dom';

function Page404() {
  return (
    <div className='404-page'>

      <h2>You found the 404 page!</h2>
      <h3>I couldn't find what you were looking for!</h3>
      <Link to="/"><button>Back To Home</button></Link>
      
    </div>
  )
}

export default Page404