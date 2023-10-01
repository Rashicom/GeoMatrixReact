import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Normaluser/User"

export const user = configureStore({
    reducer: {
        user: userReducer,   
    },

})


