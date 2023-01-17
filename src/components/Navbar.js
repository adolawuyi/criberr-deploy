import React from 'react'
import logo from './images/logo.png'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigationbar = () => {

  return (
    <Navbar bg="light" expand="lg" className='navbar mb-3' >
      <Container>
      <Navbar.Brand href="/">
      <img
              src={logo}
              width="240"
              className="criberr d-inline-block align-top"
              alt='criberrlogo'
            /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='mb-2 text-center'>
          <Nav className="ms-auto mb-2 mb-lg-0" >
            <Nav.Link href="/" className='nav-float'>Home</Nav.Link>
            <Nav.Link href="#about" className='nav-float'>About</Nav.Link>
            <Nav.Link href="#features" className='nav-float'>Features</Nav.Link>
            <Nav.Link href="#list-form" className='nav-float'>Waitlist</Nav.Link>
            <Nav.Link href="#footer" className='nav-float'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar
