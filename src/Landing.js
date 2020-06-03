import * as React from "react";
import { Form, div , Alert } from "react-bootstrap";
import SingInForm from "./SingIn";
import SingUpForm from "./SingUp";

function LandingForm() {
  const [toggle, setToggle] = React.useState(true);
  const [toggle2, setToggle2] = React.useState(false)

  return (
    <div>
      <Form className="text-center" style={{ width: "100%" }}>
        <Form.Group controlId="principal">
         <div>{toggle && <SingInForm></SingInForm>}</div>
         <div>{toggle2 && <SingUpForm></SingUpForm>}</div>
        </Form.Group>
        <Form.Group>
          <Form.Text
            className="text-muted"
            onClick={() => {
            setToggle((toggle) => !toggle)
            setToggle2((toggle2) => !toggle2)}}
          >
            Don't you have an account?
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}

export default LandingForm;
