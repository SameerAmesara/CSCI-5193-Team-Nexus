import {configureStore} from '@reduxjs/toolkit'
import JobReducer from './slices/JobSlice'
import UserReducer from './slices/UserSlice'


export const store = configureStore({
    reducer:{
        user:UserReducer,
        job:JobReducer,
    }
}) 
