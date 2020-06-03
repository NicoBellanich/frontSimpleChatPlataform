import * as React from "react";
import { Form, Button, Alert } from "react-bootstrap";

function SingUpForm() {
  return (
    <div >
      <Alert variant="light" className='text-center' style={{width: "100%"}}>
        <Alert.Heading>Member registration</Alert.Heading>
      </Alert>
      <Form className='text-center' style={{width: "100%"}}>
        <Form.Group controlId="firstName">
          <Form.Control type="firstName" placeholder="First Name" />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Control type="lastName" placeholder="Last Name" />
        </Form.Group>
        <Form.Group controlId="userName">
          <Form.Control type="userName" placeholder="User Name"/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={alert("trying to registrate")}>
          Sing Up
        </Button>
        <Form.Group>
          <Form.Text className="text-muted">
           Do you already have an account?
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SingUpForm;