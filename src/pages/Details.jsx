import Card2 from '../components/Card2'
import { Popover } from 'react-tiny-popover'
import { initFlowbite } from 'flowbite'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { server } from '../utils/axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCityAsync } from '../redux/citiesActions'
import citiesReducer from '../redux/citiesReducer'



// import { Link } from 'react-router-dom'


const Details = ({ }) => {



  // const [itineraries, setItineraries] = useState([])
  const { id } = useParams()
  const dispatch = useDispatch()
  const { city, loading } = useSelector(store => store.citiesReducer)

  useEffect(() => {

    dispatch(getCityAsync({ id }))
  },[])



  
  

  // useEffect(() => {
  //   axios('http://localhost:3000/api/cities/' + id)
  //     .then(res => setItineraries(res.data.response))
  // },)
  // console.log(setItineraries);
  return (
    <div className='flex justify-center flex-col items-center mt-24' >

      <h1 className='text-2xl sm:text-4xl text-white italic font-bold bg-black bg-opacity-75 py-1 px-3 rounded-2xl mb-2 '>CITY NAME</h1>
      <div className='flex justify-center flex-wrap flex-row my-8 mx-10 gap-4 '>
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <Link to={"/cities/"} className=" w-[10rem] h-[3rem] flex justify-center items-center px-3 py-2 text-sm font-medium mb-16  text-white bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800 border-blue-400 border-large focus:ring-4 focus:outline-none focus:ring-blue-300" >
               Go Back to Cities
            </Link>


    </div>





  )
}

export default Details