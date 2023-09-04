import { createReducer } from "@reduxjs/toolkit";
import { getCitiesSync, getCitiesAsync, getCityAsync } from "./citiesActions.js";


const intialState = {
    cities: [],
    loading: false,
    city: {}
}

const citiesReducer = createReducer(intialState,
    (builder) => builder
        .addCase(getCitiesSync, (state, action) => {
            const newState = { ...state, cities: action.payload }
            return newState
        })

        .addCase(getCitiesAsync.fulfilled, (state, action) => {
            console.log('fulfilled')
            console.log(action)
            const newState = { ...state, cities: action.payload, loading: false }
            return newState
        })
        .addCase(getCitiesAsync.pending, (state, action) => {
            console.log('pending')
            const newState = { ...state, loading: true }
            return newState
        })
        .addCase(getCitiesAsync.rejected, (state, action) => {
            console.log('rejected')
            const newState = { ...state, loading: false }
            return newState
        })

        .addCase(getCityAsync.fulfilled, (state, action) => {
            const newState = { ...state, city: action.payload, loading: false }
            return newState
        })

        .addCase(getCityAsync.pending, (state, action) => {
            console.log('pending')
            const newState = { ...state, loading: true }
            return newState
        })
        .addCase(getCityAsync.rejected, (state, action) => {
            console.log('rejected')
            const newState = { ...state, loading: false }
            return newState
        })

        .addDefaultCase(() => {
            return intialState
        })
)

export default citiesReducer