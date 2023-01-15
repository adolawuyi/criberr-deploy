import React from 'react'
import './Features.css'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'
import amazon from './video/amazon.mp4'
import {FiSettings} from 'react-icons/fi'
export default function Features(props){
    return (
        <div className='features' id='features'>
            <div className='get-started'>
                <div className='started' >
                <h1>How to get started</h1>
                </div>
                <div>
                <ul>
                    <li> <span>{'\u2611'}</span>Register using your email address or phone number</li>
                    <li><span >{'\u2611'}</span>Get verified</li>
                    <li><span >{'\u2611'}</span>Start providing or Ordering services</li>
                </ul>
                </div>
            </div>
        <div className='video-service'>
        <div className="video">
        <Video autoPlay  >
            <source src={amazon} type='video/webm'/>
        </Video>
        </div>
        <div className='our-service'>
            <a href='/'> <FiSettings/> Our Services {'\u2192'}</a>
            </div>
        </div>
        </div>
    )
    }