import {configureStore  } from "@reduxjs/toolkit";
import authReducer from "../reducer/authReducer";
import cryptoReducer from "../reducer/cryptoReducer";

export const store =configureStore({
    reducer:{
        auth:authReducer,
        crypto:cryptoReducer,
    }
})