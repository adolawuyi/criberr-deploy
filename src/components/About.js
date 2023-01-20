import React from 'react'
import './About.css'
import about from './images/about.png'
import { Container, Row, Col } from 'react-bootstrap';


export default function About(){
    return (
    <Container className='about-us py-5' id='about'>
        <Row className='about' >
            <Col >
            <img className='img-fluid mt-5 pt-3'  src={about} alt='aboutimg' />
            </Col>
             <Col className='who' >
                <div>
                <div >
                    <h1 className='who-we-are'>Who we are</h1>
                </div>
                <div>
                    <h2 className='who-we-are-2'>In need of Help?<br/>Criberr has you covered!</h2>
                </div>
                <div>
                    <p>You can order for a service at your convenience</p>
                </div>
                </div>
                <div>
                <details className='details'>
                    <summary>Learn More {'\u2192'}</summary>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do. Lorem ipsum dolor sit ame </p>
                </details>
                </div>
            </Col>
        </Row>
    </Container>
)
}