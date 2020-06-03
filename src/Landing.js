import * as React from "react";
import { Form, div , Alert, Button } from "react-bootstrap";
import SingInForm from "./SingIn";
import SingUpForm from "./SingUp";

function LandingForm() {
  const [toggle, setToggle] = React.useState(true);
  const [toggle2, setToggle2] = React.useState(false)

  const cambiarEnClick =()=>{
    setToggle((toggle) => !toggle)
    setToggle2((toggle2) => !toggle2)
  }
  
  return (
    <div>
      <Form className="text-center" style={{ width: "100%" }}>
        <Form.Group controlId="principal">
         <div>{toggle && <SingInForm eventHandler={cambiarEnClick}></SingInForm>}</div>
         <div>{toggle2 && <SingUpForm eventHandler={cambiarEnClick}></SingUpForm>}</div>
        </Form.Group>
      </Form>
    </div>
  )
  }
export default LandingForm;
