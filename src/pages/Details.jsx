import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// import { Link } from 'react-router-dom'


const Details = ({}) => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res => setCities(res.data.response))
  }, [])
  return (
<>
</>
    )
}

export default Details