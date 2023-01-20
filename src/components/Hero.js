
import React from 'react'
import newheader from './images/newheader.png'
import './Hero.css'
import ModalDialog from './ModalDialog'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    
      <Container id='hero' className='hero1'>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12} className='hero' >
          <div className='content'>
            <h1 className='heroh1'> Get Easily Connected</h1>
            <h1 className='heroh'>to nearby Quality Services</h1>
            <p className='herop'>Bringing you solutions to all your needs anywhere and everywhere,
              Get connected as you go!</p>
            <ModalDialog />
        </div>
          </Col>
          <Col >
          <img className='hero-img img-fluid'  src={newheader} alt='herologo' />
          </Col>
    
    </Row>
    </Container>
   
  )
}

export default Hero
