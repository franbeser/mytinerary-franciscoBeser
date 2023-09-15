import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LS } from "../utils/LS.js";
import { server } from "../utils/axios.js";
import { user } from "@nextui-org/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";


import { toast } from "react-toastify";


const login = createAction( 'login', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }

  

    LS.set('token', credentials.token)
   

    toast('Welcome, ' + credentials.userData.name + '!')



    
    return {
        payload: reducerData
    } 
    

})

const signup = createAction('signup', (credentials)=> {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }

    LS.set('token', credentials.token)
    toast('Welcome, ' + credentials.userData.name + '!')

    return {
        payload: reducerData
    }

})

const authenticate = createAsyncThunk('authenticate', async ()=> {
// try {

    const token = LS.getText('token')

    const {data} = await server.get('/auth/token', {
        headers: {
            Authorization: "Bearer " + token
        }
        
    })
    // toast('Welcome, ' + data.userData.name + '!')

    const reducerData = {
        user: data.userData,
        status: 'online'
    }
      toast('Welcome, ' + data.userData.name + '!')
    return reducerData
    
// } catch (error) {
//     toast('You are not logged in')
// }
    
    

    

})

const signOut = createAction('signOut', ()=> {

    
        LS.clear()
        
        return {
            payload: null
        }
    })

export { login, signup, authenticate, signOut}