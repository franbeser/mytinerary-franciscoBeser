import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../utils/axios";

const getCitiesSync = createAction('getCitiesSync', (data) => {
    return {
        payload: 'st'
    }
})

const getCitiesAsync = createAsyncThunk('getCitiesAsync', async () => {
    try {
        const res = await server.get('/cities')
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }
})





export { getCitiesSync, getCitiesAsync}