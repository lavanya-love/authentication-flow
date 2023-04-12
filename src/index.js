import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@aws-amplify/ui-react/styles.css'

import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import { AmplifyProvider } from '@aws-amplify/ui-react'

Amplify.configure(config)

/*const theme = {
  name: 'pretty-princess',
  tokens: {
    colors: {
      background: {
        primary: { value: 'hotpink' }
      }
    }
  }
}*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<AmplifyProvider theme={theme}>
  <AmplifyProvider>
    <App />
  </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
