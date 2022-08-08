import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function ContactPage() {
  return (
    <div className='contact-wrapper'>
      <h1 className='contact-h1'>Contact</h1>
      <p className='contact-p'>Say hi and connect with me on new ideas and projects!!</p>
      <button className='email-btn'><a href='mailto:samiadli00@gmail.com'>Let's Chat!</a></button>
      <div className='icons-wrapper'>
          <a href='https://github.com/1Sami1' target='_blank' ><BsGithub className='social-icon'/></a>
          <a href='https://www.linkedin.com/in/sami-adli-07194a228/' target='_blank'><BsLinkedin className='social-icon' /></a>
          <a href='https://twitter.com/SamiAdli10' target='_blank'><BsTwitter className='social-icon'/></a>
          <a href='https://instagram.com/sami.adli' target='_blank'><BsInstagram className='social-icon'/></a>
      </div>
    </div>
  )
}

export default ContactPage