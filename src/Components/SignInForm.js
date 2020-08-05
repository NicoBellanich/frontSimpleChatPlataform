import React, { useState } from 'react'
import { Button, Badge } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import useSignInMutation from '../Hooks/useSignInMutation'
import '../Pages/SignIn/SignIn.scss'

import { BsFillExclamationTriangleFill as IconAlert } from 'react-icons/bs'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import OwnSpinners from '../Components/OwnSpinners'
import useCurrentUserQuery from '../Hooks/useCurrentUserQuery'

import * as Yup from 'yup'

function SignInForm (props) {
  const [errorSignIn, setErrorSignIn] = useState(false)
  const [messageError, setMessageError] = useState('')
  const { signInUser, loading, error } = useSignInMutation()
  const {
    currentUser,
    loading: currentUserLoading,
    error: currentUserError
  } = useCurrentUserQuery()

  const history = useHistory()

  if (loading) {
    return (
      <div className='DisplaySpinners'>
        <OwnSpinners />
      </div>
    )
  }
  if (error) {
    return <p>error {error}</p>
  }

  if (currentUser) {
    history.push('/landing')
    return null
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      validationSchema={Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required')
      })}
      onSubmit={async (values) => {
        const { authError } = await signInUser(values)
        if (authError) {
          setMessageError(authError)
          setErrorSignIn(true)
          return undefined
        }
        history.push('/landing')
      }}
    >
      <Form className='DisplayMenu'>
        <div>
          {errorSignIn && (
            <Badge className='badge1' variant='warning'>
              <IconAlert /> {messageError}
            </Badge>
          )}
        </div>

        <Field name='username' type='text' placeholder='User Name' />
        <ErrorMessage name='username' />
        <Field name='password' type='password' placeholder='Password' />
        <ErrorMessage name='password' />
        <Button variant='primary' type='submit' className='buttonSignIn'>
          Sing in
        </Button>
      </Form>
    </Formik>
  )
}

export default SignInForm
