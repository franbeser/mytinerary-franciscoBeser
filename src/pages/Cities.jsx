import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { getCitiesSync, getCitiesAsync } from '../redux/citiesActions';
import { server } from '../utils/axios';
import citiesReducer from '../redux/citiesReducer.js';


const Cities = () => {

  const { loading, cities } = useSelector(store => store.citiesReducer)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCities = cities.filter((city) => city.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  // const [cities, setCities] = useState([])

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(getCitiesAsync())
    }
  }, [])

  if (loading) {
    return <h1 className='text-6xl text-white'> Please wait ...</h1>
  }
  




  return (
    <>

      <div className=' mt-20 flex justify-center'>

        <input className='w-[40rem] h-[3rem] p-3 bg-gray-500 bg-opacity-50 text-white rounded-lg border border-fuchsia-600 ' type="text" placeholder='Search your destination...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        {/* value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  */}
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
      

        {/* {filteredCities.length === 0 ? (
          <div className='w-[30rem] h-full m-0 -translate-y-16'>
<img src="https://trivedaventures.in/website/img/no-result.png" alt="" />
          </div>
        ) : (
          filteredCities.map(city => <Card key={city._id} data={city} />)
        )
        } */}
      </div>


    </>
  )
}

export default Cities