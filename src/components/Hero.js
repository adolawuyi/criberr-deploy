
import React from 'react'
import imghero from './images/imghero.png'
import './Hero.css'
import ModalDialog from './ModalDialog'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    
      <Container my-5 py-5 id='hero' className='hero'>
        <Row>
          <Col lg={7} md={12} sm={12} xs={12} className='hero' >
          <div className='content'>
            <h1 className='heroh1'> Get Easily Connected</h1>
            <h1 className='heroh'>to nearby Quality Services</h1>
            <p className='herop'>Bringing quality solutions to your needs, anytime and anywhere!<br/>Service at your Convenience</p>
            <ModalDialog />
        </div>
          </Col>
          <Col lg={5}>
          <img className='hero-img img-fluid mt-5 pt-3'  src={imghero} alt='herologo' />
          </Col>
    
    </Row>
    </Container>
   
  )
}

export default Hero
