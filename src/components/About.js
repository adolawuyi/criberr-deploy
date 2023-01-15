import React from 'react'
import './About.css'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'
import amazon from './video/amazon.mp4'

export default function About(){
    return (
    <div className='about-us' id='about'>
        <div className="video">
        <Video autoPlay  >
            <source src={amazon} type='video/webm'/>
        </Video>
        </div>
        <div className='who'>
            <div className="who-we-are">
                <h1>Who we are</h1>
            </div>
            <div>
                <h2>In need of Help?<br/>Criberr has you covered!</h2>
            </div>
            <div>
                <p>You can order for a service at your convenience</p>
            </div>
            <div>
            <details>
                <summary>Learn More {'\u2192'}</summary>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do. Lorem ipsum dolor sit ame </p>
            </details>
            </div>
            
        </div>
    </div>
        )
    }