import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ApolloProvider } from 'react-apollo'

import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import ApolloClient from './ApolloClient'

import App from './App'

ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
