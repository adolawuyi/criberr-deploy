import React, { useState } from 'react'
import 'antd/dist/reset.css'
import { Button, Form, Input, Alert } from 'antd';
import './JoinForm.css'
import axios from 'axios'
import { Container } from '@material-ui/core';
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton} from "react-share"
import {FacebookIcon, WhatsappIcon, TwitterIcon, LinkedinIcon} from "react-share"



const layout = {
    labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 12 } }
   
  };

  const tailLayout = {
    wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 12 }, md: { span: 12, offset: 8 }, lg: { span: 8, offset: 11 } }
};
 



const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
const JoinForm = () => {
  const [showAlert, setShowAlert] = useState(false)
    const url = "https://us-central1-criberr-30ca5.cloudfunctions.net/app/create"
    const [form] = Form.useForm();
    const submitFinish = (values) => {
    // console.log(values);
    form.resetFields();
    axios.post(url, values, {
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
    }

  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    setTimeout(() => {
      setShowAlert(true)
    }, 2000);
  };

 

  return (
    <div className='form-design'>
     {
      showAlert &&
      <Alert
      type='sucess'
      description={
        <p className='para-sucess'>
        Thank you for Joining <br/>
        While you wait, Please share
        <Container
        style={{
          size: 10
        }}
        >
          <div className='share-icon'>
            <FacebookShareButton
            url="https://cribber.com"
            quote={"Join Criberr Waitlist"}
            hashtag="#Criberr"
            >
              <FacebookIcon logoFillColor ="white" round={true} widths="20px" height='30px'></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton
            url="https://cribber.com"
            quote={"Join Criberr Waitlist"}
            hashtag="#Criberr"
            >
              <TwitterIcon logoFillColor ="white" round={true} widths="20px" height='30px'></TwitterIcon>
            </TwitterShareButton>
            <LinkedinShareButton
            url="https://cribber.com"
            quote={"Join Criberr Waitlist"}
            hashtag="#Criberr"
            >
              <LinkedinIcon logoFillColor ="white" round={true} widths="20px" height='30px'></LinkedinIcon>
            </LinkedinShareButton>
            <WhatsappShareButton
            title="Sharing Content"
            url="https://cribber.com"
            quote={"Join Criberr Waitlist"}
            >
              <WhatsappIcon logoFillColor ="white" round={true} widths="20px" height='30px'></WhatsappIcon>
            </WhatsappShareButton>
          </div>
        </Container>
      </p>
      } 
      />
     }
    <Form 
    form={form}
    {...layout} name="nest-messages" 
    onFinish={submitFinish} 
    validateMessages={validateMessages}
    style={{background: "white",
    width: "fit-content",
    margin: "auto",
    padding: "50px",
    borderRadius: "5px",
    }}>
       <h2 className="form-desgin">
        Join Waitlist
      </h2>
      <p className="form-desgin">
      Please fill in your correct information and be the first to know when we launch
      </p>
      <Form.Item
        name={['fullName']}
        label="Full Name"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name={['email']}
        label="Email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Email"/>
      </Form.Item>
      <div className='buttonItemLayout'>
      <Form.Item
        wrapperCol={{
          ...tailLayout.wrapperCol
        }}
      >
        <Button type="primary" htmlType="submit" >
          Join
        </Button>
      </Form.Item>
      </div>
      
    </Form>
    </div>
  )
}

export default JoinForm