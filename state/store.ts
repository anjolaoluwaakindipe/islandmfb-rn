import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from './authSlice'
import airtimeReducer from "./airtimeSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({

    auth: persistReducer(
        {
            key: "auth",
            storage,
            blacklist: ["isLoading", "errorMessage", "isError", "isSuccess"],
        },
        authReducer
    ),
    airtime:airtimeReducer
})


const presistedReducer = persistReducer(
    {
        key: "root",
        storage
    },
    rootReducer,

)

export const store = configureStore({


    reducer: presistedReducer

});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
