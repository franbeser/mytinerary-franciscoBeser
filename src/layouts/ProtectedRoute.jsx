import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({children}) => {
const {status} = useSelector(store=>store.authReducer)
if (status === 'offline'){
    return children
}
  return <Navigate to='/' />
}

export default ProtectedRoute