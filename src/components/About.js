import React from 'react'
import './About.css'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'
import amazon from './video/amazon.mp4'
import { Container, Row, Col } from 'react-bootstrap';


export default function About(){
    return (
    <Container className='about-us  py-5' id='about'>
        <Row  >
            <Col lg={6} md={12} sm={12} xs={12}className="video ">
            <Video  >
                <source src={amazon} type='video/webm'/>
            </Video>
            </Col>
             <Col lg={6} md={12} sm={12} xs={12} className='who'>
                <Row>
                <div className='who-we-are'>
                    <h1>Who we are</h1>
                </div>
                <div>
                    <h2>In need of Help?<br/>Criberr has you covered!</h2>
                </div>
                <div>
                    <p>You can order for a service at your convenience</p>
                </div>
                </Row>
                <Row>
                <details className='details'>
                    <summary>Learn More {'\u2192'}</summary>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do. Lorem ipsum dolor sit ame </p>
                </details>
                </Row>
            </Col>
        </Row>
    </Container>
)
}