import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import MainLayout from './layouts/MainLayout'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from './components/Carousel'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cities from './pages/Cities'
import {NextUIProvider} from "@nextui-org/react";
import Details from './pages/Details'
import NotFound from './components/NotFound'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { server } from './utils/axios'
import { useDispatch } from 'react-redux'
import { authenticate, login } from './actions/authActions'
import jwtDecode from 'jwt-decode'
import ProtectedRoute from './layouts/ProtectedRoute'






const router = createBrowserRouter ([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cities',
        element: <Cities />,
      },
      {
        path: '/cities/:id',
        element: <Details />,
      },
      {
        path: '/auth/up',
        element: <ProtectedRoute> <SignUp /> </ProtectedRoute>  ,
      },
      {
        path: '/auth/in',
        element:  <ProtectedRoute> <SignIn /> </ProtectedRoute> ,
      },
      {
        path: '*',
        element: <NotFound />,
      },

    ]
  },

])

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0)
  
useEffect (()=> {
  dispatch(authenticate())
  
})

useGoogleOneTapLogin({
  onSuccess: async credentialResponse => {
    console.log(credentialResponse);
    const infoUser = jwtDecode(credentialResponse.credential)
    const userData = {
      email: infoUser.email,
      password: import.meta.env.VITE_GOOGLE_PW
    }
      const res = await server.post('/auth/in', userData)
      console.log(res);
      dispatch(login(res.data))    
  },
  onError: () => {
    console.log('Login Failed');
  },
});
 

  return (
<RouterProvider router={router}/> 
  )
}

export default App
