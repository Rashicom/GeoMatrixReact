import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Normaluser/User"
import govuserReducer from "./govuser/govuser"
import cadastreReducer from "./Cadastre/Cadastreslice"


export const store = configureStore({
    reducer: {
        user: userReducer,
        govuser: govuserReducer,
        cadastre: cadastreReducer
    },

})



