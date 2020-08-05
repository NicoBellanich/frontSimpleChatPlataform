import * as React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.scss'
import SingUpForm from '../../Components/SignUpForm'
import Emoji from '../../Utils/Emoji'

function SingUp (props) {
  return (
    <div className='ContainerDisplayMenu'>
      <div>
        <h1 className='Title'>
          Member registration <Emoji symbol='🔑' />
        </h1>
        <SingUpForm />
      </div>
      <div>
        <Link to='/signIn' className='witheText'>
          Do you already have an account?
        </Link>
      </div>
    </div>
  )
}

export default SingUp
