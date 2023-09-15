import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID} >

      <App />

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      
        draggable
       
        theme="dark"
      />


    </GoogleOAuthProvider>

  </Provider>,
)
