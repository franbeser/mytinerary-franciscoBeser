import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const login = createAction( 'login', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }
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
    return {
        payload: reducerData
    }

})

const authenticate = createAsyncThunk('authenticate', ()=> {
    return {
        payload: "st"
    }

})


export { login, signup, authenticate }