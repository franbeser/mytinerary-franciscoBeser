import { useState } from 'react'
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
        path: '*',
        element: <NotFound />,
      },

    ]
  },

])

function App() {
  const [count, setCount] = useState(0)

  return (
<RouterProvider router={router}/> 
  )
}

export default App
