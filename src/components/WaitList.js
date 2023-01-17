import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Container } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WaitListForm.css'

function Waitlist() {
    const url = "https://us-central1-criberr-30ca5.cloudfunctions.net/app/create"
    const data = {
        fullName: '',
        email: ''
    } 
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert onClose={() => setShow(false)} dismissible>
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Great! You Are In!</Alert.Heading>
        <p>
        Please be on the look out for our Mobile-App Launch Mail.
        </p>
        <p>
        While you wait, Please share for others to join.
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
      </Alert>
        </Alert>
      );
    }
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    Axios.post(url, data, {
        headers: {'Content-Type': 'application/json'}
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      })

  };
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" as={Row} controlId="formBasicFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
        name='fullName'
        id='fullName'
        required
        type="text"
        placeholder="Jon Doe"
        />
      </Form.Group>
      <Form.Group className="mb-3"  as={Row} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        name='email' 
        id='email'
        required
        type="email" 
        placeholder="example@email.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>      
      <Form.Group className="mb-3"  as={Row}>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => setShow(true)}>
        Submit
      </Button>
      
    </Form>
  );
}

export default Waitlist;