import { Container } from '@material-ui/core';
import React from 'react';
import './WaitListForm.css'
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton} from "react-share"
import {FacebookIcon, WhatsappIcon, TwitterIcon, LinkedinIcon} from "react-share"
const SubmitFormAlert = () => {
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <h1 className='form-success'>
                You Are In!
            </h1>
            <p className='para-sucess'>
              Look out for our Mobile-App Launch Mail
            </p>
            <p className='para-sucess'>
              While you wait, Please share
              <Container >
                <div className='share-icon'>
                  <FacebookShareButton
                  url="https://cribber.com"
                  quote={"Join Criberr Waitlist"}
                  hashtag="#Criberr"
                  >
                    <FacebookIcon logoFillColor ="white" round={true} widths="50px"></FacebookIcon>
                  </FacebookShareButton>
                  <TwitterShareButton
                  url="https://cribber.com"
                  quote={"Join Criberr Waitlist"}
                  hashtag="#Criberr"
                  >
                    <TwitterIcon logoFillColor ="white" round={true}></TwitterIcon>
                  </TwitterShareButton>
                  <LinkedinShareButton
                  url="https://cribber.com"
                  quote={"Join Criberr Waitlist"}
                  hashtag="#Criberr"
                  >
                    <LinkedinIcon logoFillColor ="white" round={true}></LinkedinIcon>
                  </LinkedinShareButton>
                  <WhatsappShareButton
                  title="Sharing Content"
                  url="https://cribber.com"
                  quote={"Join Criberr Waitlist"}
                  >
                    <WhatsappIcon logoFillColor ="white" round={true}></WhatsappIcon>
                  </WhatsappShareButton>
                </div>
              </Container>
            </p>
        </div>
      
    </div>
  )
}

export default SubmitFormAlert
