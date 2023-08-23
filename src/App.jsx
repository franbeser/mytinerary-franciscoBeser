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
        element: <Cities />
      },
      {
        path: '/details/:name',
        element: <Details />
      },
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (

    <NextUIProvider>
    
    
    <div className=' w-full  min-h-screen bg-[url(./public/cordobaArgentina.jpg)] bg-cover overflow-x-hidden flex flex-col align-middle'>
 
<RouterProvider router={router}/> 
    {/* <MainLayout />
    <Home />

    <Footer /> */}
    </div>


    </NextUIProvider>
  )
}

export default App
