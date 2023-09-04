import Card2 from '../components/Card2'
import { Popover } from 'react-tiny-popover'
import { initFlowbite } from 'flowbite'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'



// import { Link } from 'react-router-dom'


const Details = ({ }) => {



  const [itineraries, setItineraries] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios('http://localhost:3000/api/cities/' + id)
      .then(res => setItineraries(res.data.response))
  },)
 
  return (
    <div className='flex justify-center flex-col items-center mt-24' >

      <h1 className='text-lg sm:text-4xl text-white italic font-bold bg-black bg-opacity-75 py-1 px-3 rounded-2xl mb-2 '>CITY NAME</h1>
<div className='flex justify-center flex-wrap flex-row my-8 mx-10 gap-4 '>
<Card2 />
<Card2 />
<Card2 />
</div>

      
      </div>

    



  )
}

export default Details