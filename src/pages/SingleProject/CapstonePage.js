import React from 'react'
import HeroMockupPic from '../../images/Dukes-MUv2.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll'


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

        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce='true'>
      <section className='overview-section'>
        <h3 className='overview-h3'>Overview</h3>
        <p className='overview-p'>Duke's Steakhouse</p>
        <h4 className='devstack-h4'>Development Stack</h4>
        <ul className='devstack-ul'>
          <li>WordPress</li>
          <li>CSS/SASS</li>
          <li>PHP</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>ACF</li>
          <li>GitHub</li>
        </ul>
      </section>
      </AnimationOnScroll>



      </section>




































    </div>
  )
}

export default CapstonePage