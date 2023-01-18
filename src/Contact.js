import React from 'react';
import './Contact.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default function Contact() {
  return (
    <>
    
  <h1>Need any help ??</h1>
  <h1>Contact us</h1>
  <Card style={{ width: '18rem',margin:'auto',allign: 'center',padding: '10px',marginTop: '70px', justifyContent: 'center'}}>
      <Card.Body>
  <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="Name">
        <Form.Control type="Name" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mt-3">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="outline-primary" style={{ margin: '10px' ,
    }}>Submit</Button>{' '}
      </Card.Body>
    </Card>
    </>
  );
}
