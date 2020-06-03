import * as React from "react";
import { Form, Button, Alert, div } from "react-bootstrap";

function SingInForm(props) {
  
  return (
    <div>
      <Alert variant="light" className="text-center" style={{ width: "100%" }}>
        <Alert.Heading>Member loguin</Alert.Heading>
      </Alert>
      <Form className="text-center" style={{ width: "100%" }}>
        <Form.Group controlId="userName">
          <Form.Control type="userName" placeholder="User Name" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Sing in
        </Button>
        <Form.Group>
          <Form.Text
            className="text-muted"
            onClick={props.eventHandler}
          >
            Don't you have an account?
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SingInForm;
