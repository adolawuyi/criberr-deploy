import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo.png'
import './Navbar.css'

const Navigationbar = () => {

      const [click, setClick] = useState(false)
      const handleClick = () => setClick(!click)
    return (
      <div className='header'>
          <nav className="nav">
          <a href="/" className='criberr'> <img src={logo} alt='criberrlogo' /></a>
          <div className='hamburger' onClick={handleClick}>
              {click ? (<FaTimes  size={25} style={{color: '#094aad'}}/>) 
              : (<FaBars  size={25} style={{color: '#094aad'}}/>) } 
              
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'> <a href='/'>Home</a></li>
              <li className='nav-item'> <a href='/'>About</a></li>
              <li className='nav-item'> <a href='/'>Features</a></li>
              <button className='btn btn-outline-primary my-sm-0'> <a href='/' type="button">Contact Us</a></button>
          </ul>
      </nav>
      </div>
  )
  
  }

export default Navigationbar
