import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Navo from "./Navo";
import axios from "axios";



function Login() {
  var [sname,setName]=useState("");
var [spassword,setPassword]=useState("");
var handleSubmit=async (e)=>{
  e.preventDefault();
var value=[sname,spassword];
   const response=await axios.post("http://localhost:3001/login",value);
  
}
  return (
    <Card style={{ width: '18rem',margin:'auto',allign: 'center',padding: '10px',marginTop: '70px', justifyContent: 'center'}}>
      <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="names"
        name="username" value={sname} onChange={(e)=>setName(e.target.value)} placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" value={spassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>

  );

}

export default Login;

