import { Button, Badge } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { BsFillExclamationTriangleFill as IconAlert } from 'react-icons/bs'
import React, { useState } from 'react'
import useSignUp from '../Hooks/useSignUpMutation'
import OwnSpinners from '../Components/OwnSpinners'
import useCurrentUserQuery from '../Hooks/useCurrentUserQuery'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function SignUpForm (props) {
  const [errorSignUp, setErrorSignUp] = useState(false)
  const [messageErrorSignUp, setMessageErrorSignUp] = useState('')
  const { signUpUser, loading, error } = useSignUp()
  const history = useHistory()
  const {
    currentUser,
    loading: currentUserLoading,
    error: currentUserError
  } = useCurrentUserQuery()

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
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      }}
      validationSchema={Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required')
      })}
      onSubmit={async (values) => {
        const { authError } = await signUpUser(values)
        if (authError) {
          setErrorSignUp(true)
          setMessageErrorSignUp(authError)
          return undefined
        }
        history.push('/signIn')
      }}
    >
      <Form className='DisplayMenu'>
        <div>
          {errorSignUp && (
            <Badge className='badge1' variant='warning'>
              <IconAlert /> Oh snap! something went wrong<br />
              {messageErrorSignUp}
            </Badge>
          )}
        </div>
        <Field name='firstname' type='text' placeholder='First Name' />
        <ErrorMessage name='firstname' />
        <Field name='lastname' type='text' placeholder='Last Name' />
        <ErrorMessage name='lastname' />
        <Field name='username' type='text' placeholder='User Name' />
        <ErrorMessage name='username' />
        <Field name='password' type='password' placeholder='Password' />
        <ErrorMessage name='password' />
        <Button variant='primary' type='submit' className='buttonSignUp'>
          Sing Up
        </Button>
      </Form>
    </Formik>
  )
}

export default SignUpForm
