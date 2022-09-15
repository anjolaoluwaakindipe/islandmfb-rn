import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './authSlice'
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";






export const store = configureStore({
    reducer : authReducer
  
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
