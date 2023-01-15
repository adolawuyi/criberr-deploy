import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo.png'
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
  return (
    <div className='header'>
        <nav className="nav">
        <a href="/" className='criberr'> <img src={logo} alt='criberrlogo' /></a>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes  size={25} style={{color: '#094aad'}}/>) 
            : (<FaBars  size={25} style={{color: '#094aad'}}/>) } 
            
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'> <a href='/' onClick={closeMenu}>Home</a></li>
            <li className='nav-item'> <a href='#about' onClick={closeMenu}>About</a></li>
            <li className='nav-item'> <a href='#features' onClick={closeMenu}>Features</a></li>
            <li className='nav-item'> <a href='#list-form' onClick={closeMenu}>Waitlist</a></li>
            <li className='nav-item'> <a href='#footer' onClick={closeMenu}>Contact</a></li>
    
        </ul>
    </nav>
    </div>
)



}

export default Navbar
// function CustomLink({to, children, ...props}){
//     const path = window.location.pathname

//     return(
//         <li className={path === to? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }