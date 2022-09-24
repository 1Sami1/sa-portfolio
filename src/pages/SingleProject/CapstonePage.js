import React from 'react'
import HeroMockupPic from '../../images/Dukes-MUv2.svg'


function CapstonePage() {
  return (
    <div className='projects-wrapper'>
      <h1 className='projects-h1'>Duke's Steakhouse</h1>

      <section className='projects-hero-sec'>
        <img className='hero-mockup-pic' src={HeroMockupPic} alt='High fidelity mockups of FilmfanDB homepage'></img>
        <div className='btn-div'>
        <a href='https://restaurant.bcitwebdeveloper.ca' target='_blank'><button className='livesite-btn'>Live Site</button></a>
        <a href='https://github.com/1Sami1' target='_blank'><button className='github-btn'>Github</button></a>
        </div>
      </section>




































    </div>
  )
}

export default CapstonePage