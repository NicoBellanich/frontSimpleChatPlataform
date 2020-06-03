import * as React from "react";
import { Form, div , Alert } from "react-bootstrap";
import SingInForm from "./SingIn";
import SingUpForm from "./SingUp";

function LandingForm() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div>
      <Form className="text-center" style={{ width: "100%" }}>
        <Form.Group controlId="principal">
          <SingInForm></SingInForm>
        </Form.Group>
        <Form.Group>
          <Form.Text
            className="text-muted"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            Don't you have an account?
          </Form.Text>
        </Form.Group>
      </Form>
      <div>{toggle && <SingUpForm></SingUpForm>}</div>
    </div>
  );
}

export default LandingForm;
