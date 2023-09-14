import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesReducer";
import authReducer from "./authReducer";

export const store = configureStore({
    reducer:{
        citiesReducer,
        authReducer
    }
})