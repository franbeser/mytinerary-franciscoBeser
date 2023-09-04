import { createReducer } from "@reduxjs/toolkit";
import { getCitiesSync, getCitiesAsync } from "./citiesActions.js";


const intialState = {
    cities: [],
    loading: false,
    event: {}
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

        .addDefaultCase(() => {
            return intialState
        })
)

export default citiesReducer