import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SingInForm from './SingIn';
import SingUpForm from './SingUp'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <SingInForm></SingInForm>
    <SingUpForm></SingUpForm>
  </React.StrictMode>,
  document.getElementById('root')
);
//  <App />
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
