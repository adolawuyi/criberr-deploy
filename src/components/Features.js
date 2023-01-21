import React from 'react'
import './Features.css'
import service from './images/service.png'
import 'react-html5video/dist/styles.css'
import {FiSettings} from 'react-icons/fi'
import {BsCheck2Circle} from 'react-icons/bs'
import { Container, Col, Row } from 'react-bootstrap';

export default function Features(){
    return (
    <Container fluid className='features' id='features'>
        <Row className='feature'>
            <Col lg={6} sm={12} xs={12} className='get-started '>
                <div className='started ' >
                <h1>How to get started</h1>
                </div>
                <div>
                <ul>
                    <li> <span><BsCheck2Circle/></span>Register using your phone number</li>
                    <li><span ><BsCheck2Circle/></span>Get verified</li>
                    <li><span ><BsCheck2Circle/></span>Start providing or Ordering services</li>
                </ul>
                </div>
            </Col>
            <Col lg={3} sm={12} xs={12} >
            <img className='feature-img img-fluid'  src={service} alt='how-to-get-started' />
            </Col>
            <Col lg={3} sm={12} xs={12} className='our-service '>
                <a href='/'> <span><FiSettings/> Our Services {'\u2192'}</span> </a>
            </Col>
        </Row>
    </Container>
    )
    }