import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
<>
<div className=' text-white h-full flex flex-col  bg-black border bg-opacity-50 border-violet-800 rounded-lg p-3 m-4 top-8 '>
<h1 className=' text-xl sm:text-4xl font-bold mb-1  '>Find your <span className='italic text-fuchsia-300'>perfect</span> trip,</h1>
<h2 className=' text-opacity-70 text-lg sm:text-3xl font-bold mb-3  '>designed by insiders who know and love their cities!</h2>
<button type="button" className=" w-2/3 flex justify-start bg-gradient-to-r from-fuchsia-300  hover:from-sky-400 font-semibold px-2 py-2 rounded ">
<p className='outline-black'>Start here!</p>
</button>
</div>

<Carousel />
</>


  )
}

export default Home