import React from 'react'
import './Features.css'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'
import amazon from './video/amazon.mp4'
import {FiSettings} from 'react-icons/fi'
import { Container, Row, Col } from 'react-bootstrap';

export default function Features(props){
    return (
    <Container className='features my-auto justify-content-evenly' id='features'>
        <Row >
            <Col lg={6} md={12} sm={12} xs={12} className='get-started'>
                <div className='started' >
                <h1>How to get started</h1>
                </div>
                <div>
                <ul>
                    <li> <span>{'\u2611'}</span>Register using your phone number</li>
                    <li><span >{'\u2611'}</span>Get verified</li>
                    <li><span >{'\u2611'}</span>Start providing or Ordering services</li>
                </ul>
                </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className='video-service'>
                <Col className="video">
                    <Video  >
                        <source src={amazon} type='video/webm'/>
                    </Video>
                </Col>
                <Col className='our-service text-center pt-3'>
                    <a href='/'> <span><FiSettings/> Our Services {'\u2192'}</span> </a>
                </Col>
            </Col>
        </Row>
    </Container>
    )
    }