import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import SignIn from './Pages/SignIn/SingIn'
import SignUp from './Pages/SignUp/SingUp'
import Landing from './Pages/Landing/Landing'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/'><Redirect to='SignIn' /></Route>
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/signIn' component={SignIn} />
        <Route exact path='/signUp' component={SignUp} />
      </BrowserRouter>
    </div>
  )
}

export default App
