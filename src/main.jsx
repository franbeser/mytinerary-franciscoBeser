import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   
    <GoogleOAuthProvider clientId='172330754737-drrna1nor4umdmqm3ojtaj8qvcmldqa4.apps.googleusercontent.com'>
    
    <App />

    </GoogleOAuthProvider>

  </Provider>,
)
