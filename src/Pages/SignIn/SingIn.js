import React from 'react'
import './SignIn.scss'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignInForm from '../../Components/SignInForm'
import Emoji from '../../Utils/Emoji'

function SingIn (props) {
  return (
    <div className='ContainerDisplayMenu'>
      <Jumbotron className='title1'>
        <h1>
          We Dev Trainee <Emoji symbol='🚀' />
        </h1>
        <p>
          This is a trainee Full Stack program excercise from WeDevelop{' '}
          <br />
          wich includes JS, React Hooks, Formik , Yup , Apollo Client,<br />
          JWT authentication and this is only at Front <Emoji symbol='😉😏' />
          <br />
        </p>
      </Jumbotron>
      <div>
        <h1 className='witheText'>
          Member login <Emoji symbol='📥' />
        </h1>
        <SignInForm />
        <div>
          <Link to='/signUp' className='witheText'>
            Don't you have an accont?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingIn
