import * as React from "react";
import { Form, Button, Alert, div } from "react-bootstrap";

function SingInForm() {
  const [toggle, setToggle] = React.useState(false);

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
          onClick={() => setToggle((toggle) => !toggle)}
        >
          Sing in
        </Button>
      </Form>
    </div>
  );
}

export default SingInForm;
