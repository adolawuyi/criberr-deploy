import React from 'react'
import './Footer.css'
import {FaTwitter, FaFacebook, FaInstagram, FaRegCopyright} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
    <div className='footer' >
      <div className='foot-text'>
        <a href='/'>www.criberr.com</a>
      </div>
      <div className='copyright'>
        <p>Criberr 2022 <sup><FaRegCopyright/></sup></p>
      </div>
      <div className='foot-app'>
        <ul>
            <li> <a href='https://twitter.com/criberrapp'><FaTwitter/></a></li>
            <li> <a href='/'><FaFacebook/></a></li>
            <li> <a href='https://instagram.com/criberrapp?igshid=YmMyMTA2M2Y='><FaInstagram/></a></li>
        </ul>
      </div>
    </div>
    </footer>
  )
}

export default Footer
