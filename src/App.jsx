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
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full  min-h-screen bg-[url(./public/cordobaArgentina.jpg)] bg-cover overflow-x-hidden flex flex-col align-middle'>
 
<RouterProvider router={router}/> 
    {/* <MainLayout />
    <Home />

    <Footer /> */}
    </div>
  )
}

export default App
