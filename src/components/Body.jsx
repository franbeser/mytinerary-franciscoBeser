import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


function body() {
  return (

    <>

      <div className='flex justify-center items-center align-middle p-10'>

        <div className=' w-11/12 h-[60vh] bg-black border bg-opacity-50 border-violet-800 rounded-lg  text-white flex  p-5'>

          <div className='w-3/6  h-full flex flex-col justify-center p-1'>
            
            <h1 className=' text-lg sm:text-2xl font-bold mb-2 '>Find your <span className='italic text-fuchsia-300'>perfect</span> trip, designed by insiders who know and love their cities!</h1>
            
           
            <button type="button" className=" w-2/3 flex justify-start bg-gradient-to-r from-fuchsia-300  hover:from-sky-400 font-semibold px-2 py-2 rounded ">
            <Link to='/cities'>
              <p className='outline-black'>Start here!</p>
              </Link>
            </button>
            

          </div>
        </div>
      </div>


    </>


  )
}

export default body