import * as React from "react";
import { Form, Button, Alert } from "react-bootstrap";

function SingInForm() {
  return (
    <div >
      <Alert variant="light" className='text-center' style={{width: "100%"}}>
        <Alert.Heading>Member loguin</Alert.Heading>
      </Alert>
      <Form className='text-center' style={{width: "100%"}}>
        <Form.Group controlId="userName">
          <Form.Control type="userName" placeholder="User Name"/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={alert("trying to registrate")}>
          Sing in
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

export default SingInForm;