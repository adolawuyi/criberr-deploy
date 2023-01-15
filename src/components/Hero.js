
import React from 'react'
import imghero from './images/imghero.png'
import './Hero.css'
import ModalDialog from './ModalDialog'

const Hero = () => {
  return (
    <section>
    <div className='hero' id='hero'>
        <div className='content'>
            <h1 className='heroh1'> Get Easily Connected</h1>
            <h1 className='heroh'>to nearby Quality Service</h1>
            <p className='herop'>Bringing quality solutions to your needs, anytime and anywhere!<br/>Service at your Convenience</p>
            <ModalDialog />
        </div>
        <div>
        <a href="/" className='hero-img'> <img src={imghero} alt='herologo' /></a>
        </div>
    </div>
    </section>
  )
}

export default Hero
