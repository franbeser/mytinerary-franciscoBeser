import { createReducer } from "@reduxjs/toolkit";
import { login, signup, authenticate }  from "../actions/authActions.js";

const intialState = {
    user: {},
    token: null,
    status: 'offline'
}

const authReducer = createReducer(intialState,
    (builder) => builder

        .addCase(login, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(signup, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(authenticate.fulfilled, (state, action) => {
            const newState = { ...state, }
            return newState
        })
)

export default authReducer
