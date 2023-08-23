import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'



const Cities = () => {


  const [cities, setCities] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res => setCities(res.data.response))
  }, [])

  const [searchTerm, setSearchTerm] = useState("");
  const filteredCities = cities.filter((city) => city.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <>

      <div className=' mt-20 flex justify-center'>

        <input className='w-[40rem] h-[3rem] p-3 bg-gray-500 bg-opacity-50 text-white rounded-lg border border-fuchsia-600 ' type="text" placeholder='Search your destination...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className='flex justify-center flex-wrap flex-row my-8 mx-10 gap-4 '>

        {filteredCities.length === 0 ? (
          <div className='w-[30rem] h-full m-0 -translate-y-16'>
<img src="https://trivedaventures.in/website/img/no-result.png" alt="" />
          </div>
        ) : (
          filteredCities.map(city => <Card key={city._id} data={city} />)
        )
        }
      </div>


    </>
  )
}

export default Cities